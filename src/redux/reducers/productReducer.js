import * as actionType from "../constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  ProductData: [],
  singleProduct: null,
};
const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_PRODUCTS:
      return { ...state, ProductData: action.payload.data };
    case actionType.GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
};
