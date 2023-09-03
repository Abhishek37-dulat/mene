import axios from "axios";
import * as actionType from "../constants/PostTypes";
import { toast, ToastContainer } from "react-toastify";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const getAllPost = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/posts`, { headers });
    console.log(data.data.data);
    dispatch({ type: actionType.GET_ALL_POSTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_POSTS, error: error });
  }
};
