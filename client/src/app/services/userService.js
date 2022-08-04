const axios = require("axios");
const url = "http://localhost:8080/user";
axios.defaults.withCredentials = true;

export const addNewUser = async (userData) => {
  const response = await axios.post(`${url}/sign-up`, userData);
  return response;
};

export const validateUser = async (userData) => {
  const response = await axios.post(`${url}/sign-in`, userData);
  return response;
};

export const getUserDataOnStart = async () => {
  const response = await axios.get(`${url}`);
  return response;
};

export const logOutUser = async () => {
  const response = await axios.get(`${url}/logout`);
  return response;
};
