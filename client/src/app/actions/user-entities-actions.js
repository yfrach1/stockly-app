import actionsTypes from "./constants";
import { addNewUser, validateUser, getData } from "../services/userService";
const signUpRequestSuccessed = (userData) => ({
  type: actionsTypes.SIGN_UP_REQUEST_SUCCESSED,
  userData,
});
const signUpRequestFailed = () => ({
  type: actionsTypes.SIGN_UP_REQUEST_FAILED,
});

const signInRequestSuccessed = (userData) => ({
  type: actionsTypes.SIGN_IN_REQUEST_SUCCESSED,
  userData,
});
const checkTokenRequestSuccessed = (userData) => ({
  type: actionsTypes.CHECK_USER_TOKEN_REQUEST_SUCCESSED,
  userData,
});

export const signUpAction = (newUserData) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await addNewUser(newUserData);
      if (res.data) {
        dispatch(signUpRequestSuccessed(res.data));
      } else {
        dispatch(signUpRequestFailed(res.data.message));
      }
    } catch (error) {
      dispatch(signUpRequestFailed("error"));
    }
  };
};

export const signInAction = (loginUserData) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await validateUser(loginUserData);
      console.log("res:", res.data);
      dispatch(signInRequestSuccessed(res.data));
    } catch (error) {
      console.log(error);
      //dispatch(signUpRequestFailed());
    }
  };
};

export const checkUserTokenAction = () => {
  return async (dispatch) => {
    console.log("in action");
    try {
      const res = await getData();
      // dispatch(checkUserToken());
      console.log(" res.data:", res.data);
      dispatch(checkTokenRequestSuccessed(res.data));
    } catch (error) {}
  };
};
