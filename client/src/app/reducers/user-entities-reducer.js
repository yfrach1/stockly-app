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
      updatedSearchedStocks[action.stockTicker].isMine = false;
      return {
        ...state,
        myStocks: updatedStocks,
        stock: updatedSearchedStocks[action.stockTicker],
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
      return {
        ...state,
        stockDetails: {
          stockInfo: summedPortfolioData,
          stockRevenue: portfolioRevenue,
          stockDiffPercent: portfolioDiffPercent,
        },
        stock: {
          ticker: state.portfolio.name,
          name: `${state.firstName} ${state.lastName}`,
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
