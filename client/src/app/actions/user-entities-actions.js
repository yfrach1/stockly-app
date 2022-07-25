import actionsTypes from "./constants";
import { addNewUser, validateUser } from "../services/userService";
const setShowSignIn = () => ({
   type: actionsTypes.SHOW_SIGN_IN,
});

export const signUpAction = (userData) => {
   return async (dispatch) => {
      //dispatch loader maybe
      try {
         const res = await addNewUser(userData);
         //dispatch(signUpRequestSuccessed());
      } catch (error) {
         //dispatch(signUpRequestFailed());
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
