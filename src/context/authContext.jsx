import { createContext, useEffect, useState } from "react";
import { refreshCall } from "../service/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [account, setAccount] = useState([]);
  const [accountStatus, setAccountStatus] = useState(true);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const trydata = JSON.parse(atob(token.split(".")[1]));
      if (trydata.decode) {
        setUserDetails(trydata.decode.userExits);
      } else {
        console.log("userDetails: ==>", trydata);
        setUserDetails(trydata.userExits);
        localStorage.setItem("userdata", JSON.stringify(trydata.userExits));
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
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshtoken");
            setAccountStatus(false);
            setAccount([]);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
