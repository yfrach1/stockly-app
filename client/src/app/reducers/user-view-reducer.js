import actionTypes from "../actions/constants";

const initialState = {
  stockNews: {},
  redirectLoading: false,
  fetchLoading: false,
  showToast: false,
  toastParam: { toastType: null, message: null, autoHideDuration: null },
};

const userViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STOCK_NEWS_REQUEST_SUCCESSED: {
      return {
        ...state,
        stockNews: action.payload.stockNews,
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

    default:
      return state;
  }
};

export default userViewReducer;
