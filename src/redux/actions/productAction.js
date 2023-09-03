import axios from "axios";
import * as actionType from "../constants/productConstants";
import { toast, ToastContainer } from "react-toastify";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const getAllProduct = () => async (dispatch) => {
  console.log("fuction called");
  try {
    const data = await axios.get(`${url}/product/products`);
    console.log("products: ", data);

    dispatch({ type: actionType.GET_ALL_PRODUCTS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

export const getSingleProduct = (data) => async (dispatch) => {
  try {
    localStorage.removeItem("singleproduct");
    localStorage.setItem("singleproduct", JSON.stringify(data));
    dispatch({ type: actionType.GET_SINGLE_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};
