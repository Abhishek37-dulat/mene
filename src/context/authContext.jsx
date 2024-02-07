import { createContext, useEffect, useState } from "react";
import { refreshCall } from "../service/api";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [account, setAccount] = useState([]);
  const [accountStatus, setAccountStatus] = useState(false);
  const [userDetails, setUserDetails] = useState();
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
    console.log("123userDetails: ==>", data.data.data);
    setUserDetails(data.data.data);
    localStorage.setItem("userdata", JSON.stringify(data.data.data));
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const trydata = JSON.parse(atob(token.split(".")[1]));
      if (trydata.decode) {
        dataUpdateFun(trydata.decode.userExits._id);
        console.log("userDetails: ==>", trydata.userExits);
      } else {
        console.log("userDetails: ==>", trydata.userExits);
        dataUpdateFun(trydata.userExits._id);
      }
    }
  }, [setUserDetails]);

  useEffect(() => {
    const data = setInterval(() => {
      if (accountStatus && account) {
        const token = localStorage.getItem("token");
        if (token) {
          const trydata = JSON.parse(atob(token.split(".")[1]));
          const refreshme = localStorage.getItem("refreshtoken");
          const redata = JSON.parse(atob(refreshme.split(".")[1]));
          const currentTimestamp = Date.now() / 1000;
          if (trydata.exp > currentTimestamp && redata.exp > currentTimestamp) {
            const temp = { refreshtoken: refreshme };
            refreshCall(temp);
            setAccountStatus(true);
            console.log("tryData", trydata);
            dataUpdateFun(trydata.userExits._id);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshtoken");
            setAccountStatus(false);
            setAccount([]);
            setUserDetails();
          }
        }
      }
    }, 1000 * 60 * 60 * 23);

    return () => clearInterval(data);
  }, []);

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
