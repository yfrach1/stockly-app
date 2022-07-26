import actionsTypes from "./constants";
import { addNewUser, validateUser } from "../services/userService";
const signUpRequestSuccessed = (message) => ({
  type: actionsTypes.SIGN_UP_REQUEST_SUCCESSED,
  message,
});
const signUpRequestFailed = (message) => ({
  type: actionsTypes.SIGN_UP_REQUEST_FAILED,
  message,
});
export const signUpAction = (userData) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await addNewUser(userData);
      console.log("res: ", res);
      if (res.data) {
        dispatch(signUpRequestSuccessed());
        console.log("new user added");
      } else {
        dispatch(signUpRequestFailed(res.data.message));
      }
    } catch (error) {
      dispatch(signUpRequestFailed("error"));
    }
  };
};

export const signInAction = (userData) => {
  return async (dispatch) => {
    //dispatch loader maybe
    console.log("userData: ", userData);
    try {
      const res = await validateUser(userData);
      console.log("res:", res);
      //dispatch(signUpRequestSuccessed());
    } catch (error) {
      console.log(error);
      //dispatch(signUpRequestFailed());
    }
  };
};
