import actionTypes from "../actions/constants";

const initialState = {
  searchKey: "",
};

const userViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_KEY: {
      return {
        ...state,
        searchKey: action.searchKey,
      };
    }

    default:
      return state;
  }
};

export default userViewReducer;
