import { createContext, useEffect, useState } from "react";
import { refreshCall } from "../service/api";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [account, setAccount] = useState([]);
  const [accountStatus, setAccountStatus] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [categoriesFinalData, setCategoriesFinalData] = useState();
  const dataUpdateFun = async (userId_data) => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/user/${userId_data}`,
      { headers }
    );
    console.log("123userDetails: ==>", data);
    setUserDetails(data.data.data);
    localStorage.setItem("userdata", JSON.stringify(data.data.data));
  };
  useEffect(() => {
    const token = localStorage.getItem("maneologytokenSecurity");
    if (token) {
      const trydata = JSON.parse(atob(token.split(".")[1]));
      const currentTimestamp = Date.now() / 1000;
      console.log("Current::", trydata.exp, currentTimestamp, trydata);
      if (trydata.exp > currentTimestamp) {
        if (trydata.userExits) {
          dataUpdateFun(trydata.userExits._id);
          console.log("userDetails: ==>", trydata.userExits);
        } else {
          console.log("userDetails: ==>", trydata.userExits);
          dataUpdateFun(trydata.userExits._id);
        }
      } else {
        setAccountStatus(false);
        setUserDetails(null);
      }
    }
  }, [setUserDetails]);

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
        accountStatus,
        setAccountStatus,
        userDetails,
        setUserDetails,
        categoriesFinalData,
        setCategoriesFinalData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
