import React from "react";

const Wallet = () => {
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
                Rs.0
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
