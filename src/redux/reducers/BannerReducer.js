import * as actionType from "../constants/BannerTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  BannerData: [],
};

export const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_BANNER:
      const reversedData = action.payload.reverse();
      return { ...state, BannerData: reversedData };
    default:
      return state;
  }
};
