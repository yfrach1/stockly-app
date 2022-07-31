const axios = require("axios");
const url = "http://localhost:8080/user";
axios.defaults.withCredentials = true;

export const addNewUser = async (userData) => {
   const response = await axios.post(`${url}/sign-up`, userData);

   return response;
};

export const validateUser = async (userData) => {
   try {
      const response = await axios.post(`${url}/sign-in`, userData);
      return response;
   } catch (error) {
      console.log("catch wrong log in");
      throw new Error("throw some error");
   }
};

export const getUserDataOnStart = async () => {
   try {
      const response = await axios.get(`${url}`);
      return response;
   } catch (error) {
      throw new Error("cockies not exist");
   }
};

export const logOutUser = async () => {
   try {
      const response = await axios.get(`${url}/logout`);
      return response;
   } catch (error) {
      throw new Error("cookie does not exist");
   }
};
