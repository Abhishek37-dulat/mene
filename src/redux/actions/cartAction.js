import { useSelector } from "react-redux";
import * as actionType from "../constants/cartConstant";
import axios from "axios";
import env from "react-dotenv";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const GetCartData = () => async (dispatch) => {
  console.log("CAll from cart");
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/cart/cart`, { headers });
    console.log("//////////////////////////////////////////:", data);
    dispatch({ type: actionType.GET_CART, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_CART, error: error });
  }
};

export const ADD = (item) => async (dispatch) => {
  try {
    console.log("asfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const Cartdata = { product_id: item._id, total_count: 1 };
    const data = await axios.post(`${url}/cart/cart`, Cartdata, { headers });

    const AddDataToCart = {
      product_id: data.data.data.product_id,
      total_count: data.data.data.total_count,
      _id: data.data.data._id,
    };
    dispatch({ type: actionType.ADD_CART, payload: AddDataToCart });
  } catch (error) {
    dispatch({ type: actionType.ERROR_ADD_CART, error: error });
  }
};

export const IncreaseItem = (item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const Cartdata = {
      product_id: item.product_id,
      total_count: item.total_count + 1,
    };
    const data = await axios.put(`${url}/cart/cart/${item._id}`, Cartdata, {
      headers,
    });

    const IncreaseDataToCart = {
      product_id: data.data.data.product_id,
      total_count: data.data.data.total_count,
      _id: data.data.data._id,
    };
    dispatch({ type: actionType.INCREASE_CART, payload: IncreaseDataToCart });
  } catch (error) {
    dispatch({ type: actionType.ERROR_INCREASE_CART, error: error });
  }
};

export const DecreaseItem = (item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (item.total_count === 1) {
      const data = await axios.delete(`${url}/cart/cart/${item._id}`, {
        headers,
      });
      const DecDataToCart = {
        product_id: data.data.data.product_id,
        total_count: data.data.data.total_count,
        _id: data.data.data._id,
      };
      dispatch({ type: actionType.REMOVE_CART, payload: DecDataToCart });
    } else {
      const Cartdata = {
        product_id: item.product_id,
        total_count: item.total_count - 1,
      };

      const data = await axios.put(`${url}/cart/cart/${item._id}`, Cartdata, {
        headers,
      });

      const DecDataToCart = {
        product_id: data.data.data.product_id,
        total_count: data.data.data.total_count,
        _id: data.data.data._id,
      };
      dispatch({ type: actionType.DEC_CART, payload: DecDataToCart });
    }
  } catch (error) {
    dispatch({ type: actionType.ERROR_DEC_CART, error: error });
  }
};

// export const DLT =  () => async(dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     const data = await axios.delete(`${url}/cart/cart/${item._id}`, {
//       headers,
//     });
//     dispatch({ type: actionType.DELETE_CART });
//   } catch (error) {
//     dispatch({ type: actionType.ERROR_DELETE_CART, error: error });
//   }
// };

export const REMOVE = (item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(`${url}/cart/cart/${item._id}`, {
      headers,
    });
    console.log(data);
    const DecDataToCart = {
      product_id: data.data.data.product_id,
      total_count: data.data.data.total_count,
      _id: data.data.data._id,
    };
    dispatch({ type: actionType.REMOVE_CART, payload: DecDataToCart });
  } catch (error) {
    dispatch({ type: actionType.ERROR_REMOVE_CART, error: error });
  }
};

export const setSearchQuery = (query) => async (dispatch) => {
  try {
    dispatch({ type: actionType.SEARCH_ITEM, payload: query });
  } catch (error) {
    dispatch({ type: actionType.ERROR_SEARCH_ITEM, error: error });
  }
};

export const setEmptyCart = (item) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const deletePromises = item?.map(async (data) => {
      await axios.delete(`${url}/cart/cart/${data._id}`, {
        headers,
      });
    });

    await Promise.all(deletePromises);
    dispatch({ type: actionType.EMPTY_CART });
  } catch (error) {
    dispatch({ type: actionType.ERROR_EMPTY_CART, error: error });
  }
};
