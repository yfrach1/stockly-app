const API_KEY = process.env.API_KEY;
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getStockDataAPI = async (stockQuery) => {
  const API_URL = "https://api.tiingo.com/tiingo/daily/";
  let params = new URLSearchParams({
    startDate: stockQuery.startDate, //YYYY-MM-DD
    endDate: stockQuery.endDate, //YYYY-MM-DD
    resampleFreq: stockQuery.resampleFreq, // daily/weekly/monthly
    token: API_KEY,
  });

  params = _deleteEmptyKeys(params);

  const ticker = stockQuery.ticker;
  const URL = `${API_URL}${ticker}/prices?${params.toString()}`;
  try {
    const stockData = await fetch(URL);

    return await stockData.json();
  } catch (error) {
    console.error(error);
  }
};

const getStockMetaData = async (query) => {
  const API_URL = "https://api.tiingo.com/tiingo/daily/";
  try {
    const params = new URLSearchParams({
      token: API_KEY,
    });

    const URL = `${API_URL}${query.ticker}?${params.toString()}`;
    const stockData = await fetch(URL);

    return await stockData.json();
  } catch (error) {
    console.error(error);
  }
};

const isTickerExist = (myTickers, ticker) => {
  for (let i = 0; i < myTickers.length; i++) {
    if (myTickers[i] === ticker) return true;
  }
  return false;
};

const searchStock = async (searchQuery, myTickers) => {
  let stockQuery = {
    ticker: "",
    startDate: "",
    endDate: "",
    resampleFreq: "",
  };

  const stockSearchKey = searchQuery;
  const API_URL = "https://api.tiingo.com/tiingo/utilities/search?";

  const params = new URLSearchParams({
    query: stockSearchKey,
    token: API_KEY,
  });

  const URL = `${API_URL}${params.toString()}`;
  const searchData = await fetch(URL);
  let searchResults = await searchData.json();

  searchResults = searchResults.filter((result) => {
    return !isTickerExist(myTickers, result.ticker);
  });
  let stocksList = searchResults.map((result) => {
    return { ticker: result.ticker, name: result.name };
  });
  let allStocksSearchResults = await Promise.all(
    stocksList.map(async (stock) => {
      stockQuery.ticker = stock.ticker;
      const fullStockDetails = await getStockDataAPI(stockQuery);
      return fullStockDetails;
    })
  );
  for (let i = 0; i < stocksList.length; i++) {
    if (!allStocksSearchResults[i].length) {
      stocksList.splice(i, 1);
    }
  }

  allStocksSearchResults = allStocksSearchResults.filter(
    (stock) => stock.length
  );

  let stocksDetailsToDB = stocksList.map((stock, index) => {
    stock.price = allStocksSearchResults[index][0].adjClose;
    stock.isMine = false;
    stock.change_percent = (
      (allStocksSearchResults[index][0].adjClose /
        allStocksSearchResults[index][0].adjOpen) *
        100 -
      100
    ).toFixed(2);

    return stock;
  });

  return stocksDetailsToDB;
};

const getAPIStockNews = async (query) => {
  const API_URL = "https://api.tiingo.com/tiingo/news";
  try {
    let params = new URLSearchParams({
      tickers: query.tickers,
      limit: 10,
      token: API_KEY,
    });
    params = _deleteEmptyKeys(params);

    const URL = `${API_URL}?${params.toString()}`;
    const newsArticles = await fetch(URL);

    return await newsArticles.json();
  } catch (error) {
    console.error(error);
  }
};

function _deleteEmptyKeys(params) {
  let keysToDelete = [];
  params.forEach((value, key) => {
    if (value == "") {
      keysToDelete.push(key);
    }
  });
  keysToDelete.forEach((key) => {
    params.delete(key);
  });
  return params;
}

module.exports = {
  getStockDataAPI,
  getStockMetaData,
  searchStock,
  getAPIStockNews,
};
