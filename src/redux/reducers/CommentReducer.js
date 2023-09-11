import * as actionType from "../constants/CommentTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  CommentData: [],
};

export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_COMMENTS:
      return { ...state, CommentData: action.payload };

    default:
      return state;
  }
};
