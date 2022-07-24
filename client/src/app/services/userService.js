export default class UserService {
  /**
   * A function to add a new user to the Users
   * @param user: { user_id: number, name: string, last_name: string, email: string, password: string }
   * @returns {Promise<object>}
   */
  static async postUser(name, last_name, email, password) {
    const response = await fetch("/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        last_name: last_name,
        email: email,
        password: password,
      }),
    });

    const user = await response.json();
    return user;
  }
}

const axios = require("axios");
const url = "http://localhost:8080";

export const addNewUser = async (userData) => {
  console.log("userData: ", userData);
  const newUser = {
    input: userData,
  };

  const response = await axios.post(`${url}`, userData);
  return response.data;
};
