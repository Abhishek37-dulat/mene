import axios from "axios";
import * as actionType from "../constants/BlogTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_BACKEND_URL;

export const getAllBlog = () => async (dispatch) => {
  try {
    console.log(url);
    const data = await axios.get(`${url}/blog/blogs`);
    console.log("::::::::::!!!!!!!!!!!!!@!#!@#!@#!@#", data);

    dispatch({ type: actionType.GET_ALL_BLOGS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_BLOGS, error: error });
  }
};

export const getSingleBlog = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/blog/blogs/${id}`, {
      headers,
    });
    console.log(data);
    localStorage.removeItem("SingleBlog");
    localStorage.setItem("SingleBlog", JSON.stringify(data.data.data));
    localStorage.setItem(
      "SingleBlogTheerroryoureencounteringsuggeststhatthe__id",
      JSON.stringify(data.data.data._id)
    );
    dispatch({ type: actionType.GET_SINGLE_BLOG, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SINGLE_BLOG, error: error });
  }
};
