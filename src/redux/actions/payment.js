import axios from "axios";
import * as actionType from "../constants/productConstants";

import { placeNewOrder } from "./CheckOutAction";
import { setEmptyCart } from "./cartAction";

const url = process.env.REACT_APP_BACKEND_URL;
// const url = "http://localhost:5643";

export const getApiKey = (senddata, cartdata) => async (dispatch) => {
  try {
    let amount = 3400;
    // const navigate = useNavigate();
    const datakey = await axios.get(`${url}/api/getkey`);
    const dataorder = await axios.post(`${url}/api/checkout`, { amount });
    console.log("key: ", datakey.data.key);
    console.log("order: ", dataorder.data.order);

    const options = {
      key: datakey.data.key,
      amount: dataorder.data.order.amount,
      currency: "INR",
      name: "Meneology",
      description: "Meneology of RazorPay",
      image: "https://avatars.githubusercontent.com/u/7713209?s=200&v=4",
      order_id: dataorder.data.order.id,
      callback_url: `${url}/api/paymentverification`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.on("payment.failed", async (response) => {
      console.log("Payment failed:", response.error);
    });
    razor.on("payment.success", async (response) => {});
    razor
      .open()
      .then((res) => {
        dispatch(placeNewOrder(senddata));
        dispatch(setEmptyCart(cartdata));
      })
      .catch((error) => {
        console.log(error);
      });

    // dispatch({ type: actionType.GET_ALL_PRODUCTS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

// export const getSingleProduct = (data) => async (dispatch) => {
//   try {
//     localStorage.removeItem("singleproduct");
//     localStorage.setItem("singleproduct", JSON.stringify(data));
//     dispatch({ type: actionType.GET_SINGLE_PRODUCT, payload: data });
//   } catch (error) {
//     dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
//   }
// };
