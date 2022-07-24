import actionTypes from "../actions/constants";

const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
};

const userEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SIGN_IN: {
      return {
        ...state,
        showSignUp: false,
        showSignIn: true,
        showConnectOptions: true,
      };
    }
    case actionTypes.SHOW_SIGN_UP: {
      return {
        ...state,
        showSignUp: true,
        showSignIn: false,
        showConnectOptions: true,
      };
    }

    case actionTypes.HIDE_CONNECT_OPTIOS: {
      return {
        ...state,
        showSignUp: false,
        showSignIn: false,
        showConnectOptions: false,
      };
    }

    default:
      return state;
  }
};

export default guestViewReducer;
