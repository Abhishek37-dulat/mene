import axios from "axios";
import * as actionType from "../constants/AddressTypes";
import { toast, ToastContainer } from "react-toastify";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;

// const url = "http://localhost:5643";

export const getUserAddress = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = await axios.get(`${url}/useraddress`, { headers });
    console.log("get data====>", data);

    dispatch({ type: actionType.USER_ADDRESS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_USER_ADDRESS, error: error });
  }
};

export const addUserAddress = (addressDetails) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(addressDetails);
    const data = await axios.post(`${url}/useraddress`, addressDetails, {
      headers,
    });
    console.log(data);

    dispatch({ type: actionType.ADD_USER_ADDRESS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_ADD_USER_ADDRESS, error: error });
  }
};

export const updateUserAddress = (id, addressDetails) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(id, addressDetails);
    const data = await axios.put(`${url}/useraddress/${id}`, addressDetails, {
      headers,
    });
    console.log(data);

    dispatch({ type: actionType.UPDATE_USER_ADDRESS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_UPDATE_USER_ADDRESS, error: error });
  }
};

export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(`${url}/useraddress/${id}`, {
      headers,
    });

    dispatch({
      type: actionType.DELETE_USER_ADDRESS,
      payload: id,
    });
  } catch (error) {
    dispatch({ type: actionType.ERROR_DELETE_USER_ADDRESS, error: error });
  }
};
