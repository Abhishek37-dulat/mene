import * as actionType from "../constants/ContactTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  ContactData: [],
  SingleContactData: null,
};

export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_CONTACTS:
      return { ...state, ContactData: action.payload };
    case actionType.GET_SINGLE_CONTACTS:
      return { ...state, SingleContactData: action.payload };

    default:
      return state;
  }
};
