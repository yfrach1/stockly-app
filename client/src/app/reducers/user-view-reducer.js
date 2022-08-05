import actionTypes from "../actions/constants";
import toastTypes from "../actions/constants/Toast";
import message from "../actions/constants/Message";
const initialState = {
  redirectLoading: false,
  portfolioId: null,
  fetchLoading: false,
  detailsLoading: false,
  dateFilter: "All",
  showToast: false,
  toastParam: { toastType: null, message: null, autoHideDuration: null },
  // searchKey: "",
};

const userViewReducer = (state = initialState, action) => {
  switch (action.type) {
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
        showToast: false,
      };
    }

    case actionTypes.SIGN_UP_REQUEST_FAILED: {
      return {
        ...state,
        redirectLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.SIGN_UP_FAILED,
          autoHideDuration: null,
        },
      };
    }
    case actionTypes.SIGN_OUT_REQUEST_FAILED: {
      return {
        ...state,
        redirectLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.SIGN_OUT_FAILED,
          autoHideDuration: null,
        },
      };
    }

    case actionTypes.SIGN_IN_REQUEST_SUCCESSED: {
      return {
        ...state,
        redirectLoading: false,
        showToast: false,
      };
    }
    case actionTypes.SIGN_IN_REQUEST_FAILED: {
      return {
        ...state,
        redirectLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.SIGN_IN_FAILED,
          autoHideDuration: null,
        },
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
    case actionTypes.HIDE_TOAST: {
      return {
        ...state,
        showToast: false,
      };
    }

    case actionTypes.SET_PORTFOLIO_ID: {
      return {
        ...state,
        portfolioId: action.portfolioId,
      };
    }
    case actionTypes.SET_DATE_FILTER: {
      return {
        ...state,
        dateFilter: action.filter,
      };
    }
    case actionTypes.DETAILS_REQUEST: {
      return {
        ...state,
        detailsLoading: true,
      };
    }
    case actionTypes.GET_STOCK_DETAILS_REQUEST_SUCCESSED: {
      return {
        ...state,
        detailsLoading: false,
      };
    }
    case actionTypes.GET_STOCK_DETAILS_REQUEST_FAILED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.DETAILS_REQUEST_FAILED,
          autoHideDuration: null,
        },
      };
    }

    case actionTypes.ADD_STOCK_REQUEST_SUCCESSED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.POSITIVE,
          message: message.ADD_STOCK_REQUEST_SUCCESSED,
          autoHideDuration: 5000,
        },
      };
    }
    case actionTypes.ADD_STOCK_REQUEST_FAILED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.ADD_STOCK_REQUEST_FAILED,
          autoHideDuration: null,
        },
      };
    }
    case actionTypes.UPDATE_STOCK_REQUEST_SUCCESSED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.POSITIVE,
          message: message.UPDATE_STOCK_REQUEST_SUCCESSED,
          autoHideDuration: 5000,
        },
      };
    }
    case actionTypes.UPDATE_STOCK_REQUEST_FAILED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.UPDATE_STOCK_REQUEST_FAILED,
          autoHideDuration: null,
        },
      };
    }
    case actionTypes.SEARCH_STOCK_REQUEST_FAILED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.SEARCH_STOCK_REQUEST_FAILED,
          autoHideDuration: null,
        },
      };
    }

    case actionTypes.GET_STOCK_DETAILS_REQUEST_FAILED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.GET_STOCK_DETAILS_REQUEST_FAILED,
          autoHideDuration: null,
        },
      };
    }

    case actionTypes.GET_HISTORICAL_PORTFOLIO_REQUEST_FAILED: {
      return {
        ...state,
        detailsLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.GET_HISTORICAL_PORTFOLIO_REQUEST_FAILED,
          autoHideDuration: null,
        },
      };
    }

    case actionTypes.SET_SEARCH_KEY: {
      return {
        ...state,
        fetchLoading: true,
      };
    }

    case actionTypes.DELETE_STOCK_REQUEST_SUCCESSED: {
      return {
        ...state,
        fetchLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.POSITIVE,
          message: message.DELETE_STOCK_REQUEST_SUCCESSED,
          autoHideDuration: 5000,
        },
      };
    }
    case actionTypes.DELETE_STOCK_REQUEST_FAILED: {
      return {
        ...state,
        fetchLoading: false,
        showToast: true,
        toastParam: {
          toastType: toastTypes.NEGATIVE,
          message: message.DELETE_STOCK_REQUEST_FAILED,
          autoHideDuration: null,
        },
      };
    }

    default:
      return state;
  }
};

export default userViewReducer;
