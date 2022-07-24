import actionsTypes from "./constants";

const setShowSignIn = () => ({
  type: actionsTypes.SET_SHOW_SIGN_IN,
});
const setShowSignUp = () => ({
  type: actionsTypes.SET_SHOW_SIGN_UP,
});

export const setShowSignInAction = () => {
  return (dispatch) => dispatch(setShowSignIn());
};

export const setShowSignUpAction = () => {
  return (dispatch) => dispatch(setShowSignUp());
};

////////////

export const setSearchKeyAction = (input) => {
  const searchKey = input === "" ? "none" : input;
  return (dispatch) => {
    dispatch(setSearchKey(searchKey));
  };
};
