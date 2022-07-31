import actionTypes from "../actions/constants";

const initialState = {
   userAuth: false,
   firstName: "",
   lastName: "",
   portfolio: {}, //will change to [] later when we will have more then one
   stocks: {},
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
         const stocksDict = {};
         action.userData.stocks.forEach((stock) => (stocksDict[stock.ticker] = stock));
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
         action.userData.stocks.forEach((stock) => (stocksDict[stock.ticker] = stock));

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
            stock: updatedStocks[action.stockTicker],
         };
      }
      case actionTypes.DELETE_STOCK_REQUEST_SUCCESSED: {
         const updatedStocks = { ...state.stocks };
         delete updatedStocks[action.stockTicker];
         return {
            ...state,
            stocks: updatedStocks,
         };
      }
      case actionTypes.SEARCH_STOCK_REQUEST_SUCCESSED: {
         const stocksDict = {};
         action.stocks.forEach((stock) => (stocksDict[stock.ticker] = stock));
         return {
            ...state,
            stocks: stocksDict,
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

      case actionTypes.UPDATE_STOCK_REQUEST_SUCCESSED: {
         const updatedStocks = { ...state.stocks };
         updatedStocks[action.stock.ticker].quantity = action.stock.quantity;
         return {
            ...state,
            stocks: updatedStocks,
         };
      }

      default:
         return state;
   }
};

export default userEntitiesReducer;
