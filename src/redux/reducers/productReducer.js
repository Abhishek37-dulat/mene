import * as actionType from "../constants/productConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  ProductData: [],
  singleProduct: null,
  searchData: [],
  minPrices: 0,
  maxPrices: 0,
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
      let maxP = 0;
      let temp2 = action.payload.data.map((item) => {
        if (maxP < item.product_price) {
          maxP = item.product_price;
        }
      });
      let minP = maxP;
      let temp = action.payload.data.map((item) => {
        if (minP > item.product_price) {
          minP = item.product_price;
        }
      });

      console.log("minPrice: ", minP, maxP);
      return {
        ...state,
        ProductData: action.payload.data,
        minPrices: minP,
        maxPrices: maxP,
      };
    case actionType.GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
};
