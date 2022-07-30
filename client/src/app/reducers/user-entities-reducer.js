import actionTypes from "../actions/constants";

const initialState = {
  userAuth: false,
  firstName: "",
  lastName: "",
  portfolio: {}, //will change to [] later when we will have more then one
  stocks: [],
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
      console.log(`userdata:${action.userData.stocks}`);
      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        stocks: action.userData.stocks,
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
      };
    }

    case actionTypes.ADD_STOCK_REQUEST_SUCCESSED: {
      console.log("action.stockTicker: ", action.stockTicker);
      let newStocks = [...state.stocks];
      newStocks = newStocks.map((stock) => {
        if (stock.ticker === action.stockTicker) {
          stock.isMine = true;
        }
        return stock;
      });

      console.log("newStocks: ", newStocks);
      return {
        ...state,
        stocks: newStocks,
        // searchStocks: [
        //   ...state.searchStocks.filter(
        //     (stock) => stock.ticker !== action.stockData.ticker
        //   ),
        // ],
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
      console.log(action);
      return {
        ...state,
        stocks: action.stocks,
      };
    }

    default:
      return state;
  }
};

export default userEntitiesReducer;
