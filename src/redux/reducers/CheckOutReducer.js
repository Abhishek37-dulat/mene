import * as actionType from "../constants/CheckOutTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  OrderData: [],
};

export const CheckOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_NEW_ORDER:
      return { ...state, OrderData: [...action.payload] };
    case actionType.PLACE_NEW_ORDER:
      return { ...state, OrderData: [...state.OrderData, action.payload] };
    default:
      return state;
  }
};
