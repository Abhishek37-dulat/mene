import * as actionType from "../constants/PostTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  PostData: [],
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_POSTS:
      const reversedData = action.payload.reverse();
      return { ...state, PostData: reversedData };

    default:
      return state;
  }
};
