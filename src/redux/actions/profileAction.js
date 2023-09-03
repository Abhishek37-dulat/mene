import { useSelector } from "react-redux";
import * as actionType from "../constants/profileTypes";
import axios from "axios";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const GetProfileData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/profile`, { headers });
    console.log(":::::::::::::::::::::", data);
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

    console.log("PRofile::::", item);
    console.log("PRofile::::1");

    const formData = new FormData();
    console.log("PRofile::::2");
    if (item.first_name !== "") {
      formData.append("first_name", item.first_name);
    }
    if (item.last_name !== "") {
      formData.append("last_name", item.last_name);
    }
    if (item.gender !== "") {
      formData.append("gender", item.gender);
    }
    if (item.dob !== "") {
      formData.append("dob", item.dob);
    }
    if (item?.image) {
      formData.append("image", item.image);
    }
    console.log("PRofile::::3");
    const preData = await axios.get(`${url}/profile`, { headers });

    if (preData?.data?.data?.length > 0 ? true : false) {
      const data = await axios.put(
        `${url}/profile/${preData.data.data[0]._id}`,
        formData,
        { headers }
      );
      console.log("PUT::", data);
      dispatch({ type: actionType.UPDATE_PROFILE, payload: data.data.data });
    } else {
      const data = await axios.post(`${url}/profile`, formData, { headers });
      console.log("POST::", data);
      dispatch({ type: actionType.ADD_PROFILE, payload: data.data.data });
    }
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
