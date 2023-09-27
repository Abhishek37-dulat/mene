import { useSelector } from "react-redux";
import * as actionType from "../constants/SaveTypes";
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const GetSaveData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/save/save`, { headers });
    console.log("SAVE DATA:::::::::::::::", data);
    dispatch({
      type: actionType.GET_ALL_SAVE_PRODUCT,
      payload: data.data.data,
    });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_SAVE_PRODUCT, error: error });
  }
};

export const AddToSaveData = (item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const savedata = { product_id: item };
    const data = await axios.post(`${url}/save/save`, savedata, { headers });

    dispatch({ type: actionType.ADD_SAVE_PRODUCT, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_ADD_SAVE_PRODUCT, error: error });
  }
};

export const RemoveFromSaveData = (item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(`${url}/save/save/${item}`, {
      headers,
    });
    dispatch({
      type: actionType.DELETE_SAVE_PRODUCT,
      payload: data.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionType.ERROR_DELETE_SAVE_PRODUCT,
      error: error,
    });
  }
};
