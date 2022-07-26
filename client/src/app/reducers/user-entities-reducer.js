import actionTypes from "../actions/constants";

const initialState = {
  userAuth: false,
  firstName: "",
  lastName: "",
};

const userEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST_SUCCESSED: {
      return {
        ...state,
        userAuth: true,
        firstName: "Harel",
        lastName: "Yfrach",
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

export default userEntitiesReducer;
