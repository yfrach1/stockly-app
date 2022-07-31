import actionTypes from "../actions/constants";

const initialState = {
  searchKey: "ccc",
  stockDetails: {},
  //stock: {},
  redirectLoading: false,
  fetchLoading: false,
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
        stockDetails: action.payload.stockData.stockData,
        //stock: action.payload.stockData.stock,
      };
    }
    case actionTypes.CHECK_USER_TOKEN_REQUEST: {
      return {
        ...state,
        redirectLoading: true,
      };
    }

    case actionTypes.CHECK_USER_TOKEN_REQUEST_SUCCESSED: {
      return {
        ...state,
        redirectLoading: false,
      };
    }
    case actionTypes.CHECK_USER_TOKEN_REQUEST_FAILED: {
      return {
        ...state,
        redirectLoading: false,
      };
    }
    case actionTypes.SIGN_IN_REQUEST: {
      return {
        ...state,
        redirectLoading: true,
      };
    }
    case actionTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        redirectLoading: true,
      };
    }
    case actionTypes.SIGN_UP_REQUEST_SUCCESSED: {
      return {
        ...state,
        redirectLoading: false,
      };
    }

    case actionTypes.SIGN_UP_REQUEST_FAILED: {
      return {
        ...state,
        redirectLoading: false,
      };
    }
    case actionTypes.SIGN_IN_REQUEST_SUCCESSED: {
      return {
        ...state,
        redirectLoading: false,
      };
    }
    case actionTypes.SIGN_IN_REQUEST_FAILED: {
      return {
        ...state,
        redirectLoading: false,
      };
    }
    case actionTypes.SEARCH_STOCK_REQUEST: {
      return {
        ...state,
        fetchLoading: true,
      };
    }
    case actionTypes.SEARCH_STOCK_REQUEST_SUCCESSED: {
      return {
        ...state,
        fetchLoading: false,
      };
    }
    case actionTypes.SEARCH_STOCK_REQUEST_FAILED: {
      return {
        ...state,
        fetchLoading: false,
      };
    }
    case actionTypes.ADD_STOCK_REQUEST_SUCCESSED: {
      return {
        ...state,
        //stock: (state.stock.isMine = true),
      };
    }
    default:
      return state;
  }
};

export default userViewReducer;
