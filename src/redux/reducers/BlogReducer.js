import * as actionType from "../constants/BlogTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  BlogData: [],
  singleBlog: null,
};
const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};
export const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_BLOGS:
      return { ...state, BlogData: action.payload.data };
    case actionType.GET_SINGLE_BLOG:
      return { ...state, singleBlog: action.payload.data };

    default:
      return state;
  }
};
