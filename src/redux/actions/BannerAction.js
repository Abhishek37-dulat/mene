import axios from "axios";
import * as actionType from "../constants/BannerTypes";
import { toast, ToastContainer } from "react-toastify";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const getAllBanner = () => async (dispatch) => {
  try {
    const data = await axios.get(`${url}/banner`);
    console.log(data.data.data);
    dispatch({ type: actionType.GET_ALL_BANNER, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_BANNER, error: error });
  }
};
