import actionTypes from "../actions/constants";

const initialState = {
  userAuth: false,
  firstName: "",
  lastName: "",
  portfolio: {}, //will change to [] later when we will have more then one
  stocks: [],
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
      return {
        ...state,
        userAuth: true,
        lastName: action.userData.lastName,
        firstName: action.userData.firstName,
        portfolio: action.userData.portfolio,
        stocks: action.userData.stocks,
      };
    }

    default:
      return state;
  }
};

export default userEntitiesReducer;
