import * as actionType from "../constants/WalletTypes";
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const GetWalletData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/wallet/wallet`, { headers });
    console.log("WALLET DATA:::::::::::::::", data);
    dispatch({
      type: actionType.GET_WALLET,
      payload: data.data.data,
    });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_WALLET, error: error });
  }
};
