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
    case actionType.CANCEL_NEW_ORDER:
      const data = state.OrderData.map((item) => {
        if (item._id === action.payload._id) {
          item.order_status = action.payload.order_status;
          return item;
        } else {
          item.order_status = item.order_status;
          return item;
        }
      });

      return { ...state, OrderData: [...data] };
    default:
      return state;
  }
};
