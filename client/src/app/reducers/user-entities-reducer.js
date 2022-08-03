import actionTypes from "../actions/constants";

const initialState = {
  userAuth: false,
  firstName: "",
  lastName: "",
  portfolio: {}, //will change to [] later when we will have more then one
  stocks: {},
  stock: {},
  stockDetails: { stockInfo: [], stockRevenue: "", stockDiffPercent: "" },
  stockNews: [],
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
      action.userData.stocks.forEach(
        (stock) => (stocksDict[stock.ticker] = stock)
      );
      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        stocks: stocksDict,
        stock: action.userData.stocks.length ? action.userData.stocks[0] : {},
      };
    }
    //check if need to stay with 2 same cases
    case actionTypes.CHECK_USER_TOKEN_REQUEST_SUCCESSED: {
      const stocksDict = {};
      action.userData.stocks.forEach(
        (stock) => (stocksDict[stock.ticker] = stock)
      );

      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        stocks: stocksDict,
        stock: action.userData.stocks.length ? action.userData.stocks[0] : {},
      };
    }

    case actionTypes.ADD_STOCK_REQUEST_SUCCESSED: {
      const updatedStocks = { ...state.stocks };
      updatedStocks[action.stockTicker].isMine = true;
      return {
        ...state,
        stocks: updatedStocks,
        stock: { ...updatedStocks[action.stockTicker], isMine: true },
      };
    }
    case actionTypes.DELETE_STOCK_REQUEST_SUCCESSED: {
      const updatedStocks = { ...state.stocks };
      delete updatedStocks[action.stockTicker];
      return {
        ...state,
        stocks: updatedStocks,
        stock: { ...state.stock, isMine: false },
      };
    }
    case actionTypes.SEARCH_STOCK_REQUEST_SUCCESSED: {
      const stocksDict = {};
      action.stocks.forEach((stock) => (stocksDict[stock.ticker] = stock));
      return {
        ...state,
        stocks: stocksDict,
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
          stockRevenue: null,
          stockDiffPercent: null,
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
        stock: state.stocks[action.ticker],
      };
    }

    case actionTypes.UPDATE_STOCK_REQUEST_SUCCESSED: {
      const updatedStocks = { ...state.stocks };
      updatedStocks[action.ticker].quantity = action.quantity;
      const updatedStock = { ...updatedStocks[action.ticker] };
      return {
        ...state,
        stocks: updatedStocks,
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

    default:
      return state;
  }
};

export default userEntitiesReducer;
