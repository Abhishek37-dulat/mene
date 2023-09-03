import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../cart.gif";

const Empty = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row py-4 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
            <img src={Cart} alt="emptycart" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h3 style={{ fontWeight: "600", textAlign: "center" }}>
              Your Cart is empty!
            </h3>
            <p style={{ textAlign: "center" }}>Add items to it now.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
            <Link to="/">
              <button
                style={{
                  background: "#ff6900",
                  border: "1px solid #ff6900",
                  borderRadius: "25px",
                  color: "#fff",
                  width: "160px",
                  height: "40px",
                }}
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empty;
