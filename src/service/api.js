import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;
// console.log("URL: ", URL);
// const URL = "http://localhost:5643";

export const authenticatesSignup = async (data) => {
  try {
    const registerdata = await axios.post(`${URL}/user/register`, data);
    return registerdata;
  } catch (error) {
    return error.response;
  }
};

export const authenticatesLogin = async (data) => {
  try {
    const logindata = await axios.post(`${URL}/user/login`, data);
    localStorage.setItem("maneologytokenSecurity", logindata.data.token);

    return logindata;
  } catch (error) {
    return error;
  }
};
