import { useSelector } from "react-redux";
import * as actionType from "../constants/SeoTypes";
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const getSeo = () => async (dispatch) => {
  try {
    const data = await axios.get(`${url}/seo`);
    console.log(data);

    dispatch({ type: actionType.GET_SEO, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SEO, error: error });
  }
};

export const getSingleSeo = (id) => async (dispatch) => {
  try {
    const data = await axios.get(`${url}/seo/${id}`);
    console.log(data);

    dispatch({ type: actionType.GET_SINGLE_SEO, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SINGLE_SEO, error: error });
  }
};
