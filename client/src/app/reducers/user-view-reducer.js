import actionTypes from "../actions/constants";

const initialState = {
   searchKey: "",
   stockDetails: [],
};

const userViewReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.SET_SEARCH_KEY: {
         return {
            ...state,
            searchKey: action.searchKey,
         };
      }

      case actionTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED: {
         return {
            ...state,
            stockDetails: action.stockData.data,
         };
      }

      default:
         return state;
   }
};

export default userViewReducer;
