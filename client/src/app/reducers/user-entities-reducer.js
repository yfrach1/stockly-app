import actionTypes from "../actions/constants";

const initialState = {
   userAuth: false,
   firstName: "",
   lastName: "",
   portfolio: {}, //will change to [] later when we will have more then one
   stocks: [],
   searchStocks: [],
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
            searchStocks: [],
         };
      }

      case actionTypes.ADD_STOCK_REQUEST_SUCCESSED: {
         return {
            ...state,
            userAuth: true,
            stocks: [...state.stocks, action.stockData],
            searchStocks: [
               ...state.searchStocks.filter((stock) => stock.ticker !== action.stockData.ticker),
            ],
         };
      }
      case actionTypes.SEARCH_STOCK_REQUEST_SUCCESSED: {
         return {
            ...state,
            stocks: action.stockSearchData.myStocks,
            searchStocks: action.stockSearchData.searchStocks,
         };
      }

      default:
         return state;
   }
};

export default userEntitiesReducer;
