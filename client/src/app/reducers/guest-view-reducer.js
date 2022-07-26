import actionTypes from "../actions/constants";

const initialState = {};

const guestViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST_FAILED: {
      alert(action.message);
      return { ...state };
    }
    default:
      return state;
  }
};

export default guestViewReducer;
