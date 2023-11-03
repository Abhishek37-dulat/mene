import { useSelector } from "react-redux";
import * as actionType from "../constants/profileTypes";
import axios from "axios";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const GetProfileData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/user/user`, { headers });
    console.log("profile Dataaaaaa:::::::::::::::::::::", data);
    dispatch({ type: actionType.GET_PROFILE, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_PROFILE, error: error });
  }
};

export const AddProfileData = (item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(item);
    const data = await axios.put(`${url}/user/details/update`, item, {
      headers,
    });
    localStorage.setItem("userdata", JSON.stringify(data.data.data));

    dispatch({ type: actionType.ADD_PROFILE, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_ADD_PROFILE, error: error });
  }
};

export const UpdateProfileData = (id, item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.put(`${url}/profile/${id}`, item, { headers });
    dispatch({ type: actionType.UPDATE_PROFILE, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_UPDATE_PROFILE, error: error });
  }
};
