import axios from "axios";
import * as actionType from "../constants/CheckOutTypes";
import { toast, ToastContainer } from "react-toastify";
import env from "react-dotenv";
import { useDispatch, useSelector } from "react-redux";
import { removeCartDetailsFromRedux } from "./cartAction";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const placeNewOrder = (orderDetails) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(orderDetails);
    // const data = await axios.post(`${url}/checkout`, orderDetails, {
    //   headers,
    // });
    // console.log(data);
    const phonepayData = await axios.post(`${url}/create-checkout-session`, {
      userId: orderDetails?.userID,
      orderDetails,
    });
    window.location.href = phonepayData.data.url;

    // dispatch({ type: actionType.PLACE_NEW_ORDER, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_PLACE_NEW_ORDER, error: error });
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/checkout`, {
      headers,
    });
    console.log("ALL ORDERS data::::::", data);
    dispatch({ type: actionType.GET_NEW_ORDER, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_NEW_ORDER, error: error });
  }
};

export const cancelOrder = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.put(`${url}/checkout/${id}`, null, {
      headers,
    });
    console.log(data);

    dispatch({ type: actionType.CANCEL_NEW_ORDER, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_CANCEL_NEW_ORDER, error: error });
  }
};
