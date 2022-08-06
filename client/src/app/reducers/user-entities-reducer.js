import actionTypes from "../actions/constants";

const initialState = {
  userAuth: false,
  firstName: "",
  lastName: "",
  portfolio: {}, //will change to [] later when we will have more then one
  myStocks: {},
  searchedStocks: {},
  stock: {},
  stockDetails: {
    stockInfo: [],
    stockRevenue: { All: 0 },
    stockDiffPercent: { All: 0 },
  },
  stockNews: [],
  searchKey: "",
  portfolioDetails: { name: "", dayGain: 0, dayPercent: 0 },
};

const userEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST_SUCCESSED: {
      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
      };
    }
    case actionTypes.SIGN_IN_REQUEST_SUCCESSED: {
      const stocksDict = {};
      action.userData.stocks.forEach((stock) => {
        stock.isChecked = true;
        return (stocksDict[stock.ticker] = stock);
      });
      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        myStocks: stocksDict,
        stock: action.userData.stocks.length ? action.userData.stocks[0] : {},
      };
    }
    //check if need to stay with 2 same cases
    case actionTypes.CHECK_USER_TOKEN_REQUEST_SUCCESSED: {
      const stocksDict = {};
      action.userData.stocks.forEach((stock) => {
        stock.isChecked = true;
        return (stocksDict[stock.ticker] = stock);
      });

      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        myStocks: stocksDict,
        stock: action.userData.stocks.length ? action.userData.stocks[0] : {},
      };
    }

    case actionTypes.ADD_STOCK_REQUEST_SUCCESSED: {
      const updatedMyStocks = { ...state.myStocks };
      const updatedSearchedStocks = { ...state.searchedStocks };
      updatedMyStocks[action.stockTicker] = action.newStock;
      updatedMyStocks[action.stockTicker].isChecked = true;
      updatedSearchedStocks[action.stockTicker].isMine = true;
      return {
        ...state,
        myStocks: updatedMyStocks,
        searchedStocks: updatedSearchedStocks,
        stock: { ...updatedMyStocks[action.stockTicker] },
      };
    }
    case actionTypes.DELETE_STOCK_REQUEST_SUCCESSED: {
      const updatedStocks = { ...state.myStocks };
      const updatedSearchedStocks = { ...state.searchedStocks };
      delete updatedStocks[action.stockTicker];
      if (state.searchKey.length) {
        updatedSearchedStocks[action.stockTicker].isMine = false;
      }
      const updatedStock = { ...state.stock };

      updatedStock.isMine = false;
      return {
        ...state,
        myStocks: updatedStocks,
        searchedStocks: state.searchKey.length ? updatedSearchedStocks : {},
        stock: updatedStock,
      };
    }
    case actionTypes.SEARCH_STOCK_REQUEST_SUCCESSED: {
      const stocksDict = {};
      action.stocks.forEach((stock) => (stocksDict[stock.ticker] = stock));

      return {
        ...state,
        myStocks: action.searchKey.length ? state.myStocks : stocksDict,
        searchedStocks: action.searchKey.length ? stocksDict : {},
      };
    }
    case actionTypes.SIGN_OUT_REQUEST_SUCCESSED: {
      return {
        ...state,
        userAuth: false,
        firstName: "",
        lastName: "",
        portfolio: {},
        stocks: {},
        stock: {},
        stockDetails: {
          stockInfo: [],
          stockRevenue: {},
          stockDiffPercent: {},
        },
      };
    }
    //matabe need to add loader before this action
    case actionTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED: {
      return {
        ...state,
        stockDetails: {
          stockInfo: action.stockInfo,
          stockDiffPercent: state.stockDetails.stockDiffPercent,
          stockRevenue: state.stockDetails.stockRevenue,
        },
        stock: state.searchKey.length
          ? state.searchedStocks[action.ticker]
          : state.myStocks[action.ticker],
      };
    }

    case actionTypes.UPDATE_STOCK_REQUEST_SUCCESSED: {
      const updatedStocks = { ...state.myStocks };
      updatedStocks[action.ticker].quantity = action.quantity;
      const updatedStock = { ...updatedStocks[action.ticker] };
      return {
        ...state,
        myStocks: updatedStocks,
        stock: updatedStock,
      };
    }

    case actionTypes.GET_HISTORICAL_PORTFOLIO_REQUEST_SUCCESSED: {
      const { summedPortfolioData, portfolioRevenue, portfolioDiffPercent } = {
        ...action.payload.portfolioData.data,
      };
      console.log(summedPortfolioData.at(-1));
      console.log(summedPortfolioData.at(-2));

      return {
        ...state,
        stockDetails: {
          stockInfo: summedPortfolioData ? summedPortfolioData : null,
          stockRevenue: portfolioRevenue ? portfolioRevenue : null,
          stockDiffPercent: portfolioDiffPercent ? portfolioDiffPercent : null,
        },
        portfolioDetails: {
          name: state.portfolio.name,
          dayGain:
            summedPortfolioData.at(-1).close - summedPortfolioData.at(-5).close,
          dayPercent: (
            (summedPortfolioData.at(-1).close /
              summedPortfolioData.at(-5).close -
              1) *
            100
          ).toFixed(2),
        },
      };
    }

    case actionTypes.GET_STOCK_NEWS_REQUEST_SUCCESSED: {
      return {
        ...state,
        stockNews: action.payload.stockNews.data,
      };
    }
    case actionTypes.SET_SEARCH_KEY: {
      return {
        ...state,
        searchKey: action.searchKey,
      };
    }
    default:
      return state;
  }
};

export default userEntitiesReducer;
