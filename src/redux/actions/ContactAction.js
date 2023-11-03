import axios from "axios";
import * as actionType from "../constants/ContactTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_BACKEND_URL;

export const getAllContacts = () => async (dispatch) => {
  try {
    const data = await axios.get(`${url}/contact/contact`);
    console.log("asdfasfsdkfjnskdvnkvnhernvlwkemfvwjenifwenjifcwe", data);

    dispatch({ type: actionType.GET_ALL_CONTACTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_CONTACTS, error: error });
  }
};

export const getSingleContacts = (id) => async (dispatch) => {
  try {
    const data = await axios.get(`${url}/contact/contact/${id}`);

    dispatch({ type: actionType.GET_SINGLE_CONTACTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SINGLE_CONTACTS, error: error });
  }
};
