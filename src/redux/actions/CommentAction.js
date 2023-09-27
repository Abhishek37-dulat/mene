import axios from "axios";
import * as actionType from "../constants/CommentTypes";
import { toast, ToastContainer } from "react-toastify";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const getAllComments = (productID) => async (dispatch) => {
  try {
    const datanew = { productID: productID };
    const data = await axios.post(`${url}/comment/comments`, datanew);
    console.log("comment data::::::", data.data.data);
    dispatch({ type: actionType.GET_ALL_COMMENTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_COMMENTS, error: error });
  }
};

export const placeNewComment = (commentDetails) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(commentDetails);
    const formData = new FormData();
    formData.append("productID", commentDetails?.productID);
    formData.append("comment", commentDetails?.comment);
    formData.append("rating", commentDetails?.rating);
    formData.append("title", commentDetails?.title);
    formData.append("image", commentDetails?.image);
    console.log(commentDetails);
    const data = await axios.post(`${url}/comment/comment`, formData, {
      headers,
    });
    console.log(data);

    dispatch({ type: actionType.PLACE_NEW_COMMENT, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_PLACE_NEW_COMMENT, error: error });
  }
};

export const updateNewComment = (commentDetails, id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(commentDetails);
    const formData = new FormData();
    formData.append("productID", commentDetails?.productID);
    formData.append("comment", commentDetails?.comment);
    formData.append("rating", commentDetails?.rating);
    formData.append("title", commentDetails?.title);
    formData.append("image", commentDetails?.image);
    console.log(commentDetails);
    const data = await axios.post(`${url}/comment/comment/${id}`, formData, {
      headers,
    });
    console.log(data);

    dispatch({ type: actionType.UPDATE_COMMENT, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_UPDATE_COMMENT, error: error });
  }
};

// export const cancelOrder = (id) => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     const data = await axios.put(`${url}/checkout/${id}`, null, {
//       headers,
//     });
//     console.log(data);

//     dispatch({ type: actionType.CANCEL_NEW_ORDER, payload: data.data.data });
//   } catch (error) {
//     dispatch({ type: actionType.ERROR_CANCEL_NEW_ORDER, error: error });
//   }
// };
