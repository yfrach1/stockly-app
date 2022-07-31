import actionTypes from "../actions/constants";

const initialState = {
  userAuth: false,
  firstName: "",
  lastName: "",
  portfolio: {}, //will change to [] later when we will have more then one
  stocks: [],
  stock: {},
  stockDetails: {},
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
      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        stocks: action.userData.stocks,
        stock: action.userData.stocks.length ? action.userData.stocks[0] : {},
      };
    }
    //check if need to stay with 2 same cases
    case actionTypes.CHECK_USER_TOKEN_REQUEST_SUCCESSED: {
      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        stocks: action.userData.stocks,
        stock: action.stocks.length ? action.stocks[0] : {},
      };
    }

    case actionTypes.ADD_STOCK_REQUEST_SUCCESSED: {
      let newStocks = [...state.stocks];
      newStocks = newStocks.map((stock) => {
        if (stock.ticker === action.stockTicker) {
          stock.isMine = true;
        }
        return stock;
      });

      return {
        ...state,
        stocks: newStocks,
        stock: (state.stock.isMine = true),
      };
    }
    case actionTypes.DELETE_STOCK_REQUEST_SUCCESSED: {
      console.log(action.stockId);
      return {
        ...state,
        stocks: [
          ...state.stocks.filter((stock) => stock.stock_id !== action.stockId),
        ],
      };
    }
    case actionTypes.SEARCH_STOCK_REQUEST_SUCCESSED: {
      return {
        ...state,
        stocks: action.stocks,
        stock: action.stocks.length ? action.stocks[0] : {},
      };
    }
    case actionTypes.SIGN_OUT_REQUEST_SUCCESSED: {
      return {
        ...state,
        userAuth: false,
      };
    }
    //matabe need to add loader before this action
    case actionTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED: {
      return {
        ...state,
        stockDetails: action.payload.stockData.stockData,
        stock: action.payload.stockData.stock,
      };
    }

    default:
      return state;
  }
};

export default userEntitiesReducer;
