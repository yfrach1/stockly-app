import actionTypes from "../actions/constants";

const initialState = {
  userAuth: false,
  firstName: "Harel",
  lastName: "",
  portfolio: null,
};

const userEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUEST_SUCCESSED: {
      console.log("action.data :", action.data);
      console.log("lastName :", action.data.lastName);
      console.log("firstName :", action.data.firstName);

      console.log("portfolio :", action.data.portfolio);

      return {
        ...state,
        userAuth: true,
        lastName: action.data.lastName,
        firstName: action.data.firstName,
        portfolio: action.data.portfolio,
      };
    }

    default:
      return state;
  }
};

export default userEntitiesReducer;
