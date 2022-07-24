import actionTypes from "../actions/constants";

const initialState = {
  showSignUp: false,
  showSignIn: false,
};

const guestViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHOW_SIGN_IN: {
      return {
        ...state,
        showSignIn: true,
      };
    }
    case actionTypes.SET_SHOW_SIGN_UP: {
      return {
        ...state,
        showSignIn: true,
      };
    }

    default:
      return state;
  }
};

export default guestViewReducer;
