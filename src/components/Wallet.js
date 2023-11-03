import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWalletData } from "../redux/actions/WalletAction";

const Wallet = () => {
  const dispatch = useDispatch();
  const { walletBalance } = useSelector((state) => state.walletReducers);
  console.log(walletBalance[0]?.amount);
  useEffect(() => {
    dispatch(GetWalletData());
  }, [dispatch]);
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col-12">
            <h1>Welcome to your Wallet !</h1>
            <p></p>
            <h3>Ws Reatila Balance</h3>
            <p>
              Total Balance :{" "}
              <span style={{ color: "red", fontWeight: 600, fontSize: "20px" }}>
                Rs.
                {walletBalance.length > 0
                  ? walletBalance[0]?.amount
                    ? walletBalance[0]?.amount
                    : 0
                  : 0}
              </span>{" "}
            </p>
            <ul>
              <li>Can be used to purchase physical products</li>
              <li>Can be used to purchase from maneology website</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
