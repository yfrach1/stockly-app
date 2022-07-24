import actionsTypes from "./constants";
import { addNewUser } from "../services/userService";
const setShowSignIn = () => ({
  type: actionsTypes.SHOW_SIGN_IN,
});

export const SignUpAction = (userData) => {
  return async (dispatch) => {
    //dispatch loader maybe
    try {
      const res = await addNewUser(userData);
      //dispatch(signUpRequestSuccessed());
    } catch (error) {
      console.log("err");
      //dispatch(signUpRequestFailed());
    }
  };
};
