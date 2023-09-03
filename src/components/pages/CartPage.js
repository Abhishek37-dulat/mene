import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, NavLink, Table } from "react-bootstrap";
import { useEffect } from "react";
import {
  DecreaseItem,
  GetCartData,
  IncreaseItem,
  REMOVE,
} from "../../redux/actions/cartAction";
import { useContext } from "react";
import { DataContext } from "../../context/authContext";
import { useState } from "react";
import Cart from "../../cart.gif";
import env from "react-dotenv";

const CartPage = () => {
  const history = useNavigate();
  const [price, setPrice] = useState(0);

  const { carts } = useSelector((state) => state.cartReducers);
  const { ProductData } = useSelector((state) => state.ProductReducer);

  const { userDetails, setAccountStatus } = useContext(DataContext);

  const dispatch = useDispatch();

  const handleIncrease = (data) => {
    dispatch(IncreaseItem(data));
  };

  const handleDec = (data) => {
    dispatch(DecreaseItem(data));
  };
  const handleRemove = (data) => {
    console.log(data);
    dispatch(REMOVE(data));
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    handleClose();
    userDetails ? setAccountStatus(true) : setAccountStatus(false);
    userDetails ? history("/checkout") : history("/login");
  };
  useEffect(() => {
    dispatch(GetCartData());
  }, [dispatch]);

  useEffect(() => {
    let p = 0;
    carts.map((ele) => {
      let product = ProductData?.find((e) => ele?.product_id === e?._id);
      p =
        (product?.product_price -
          (product?.product_price * product?.product_discount) / 100) *
          ele?.total_count +
        p;
    });
    setPrice(p.toFixed(2));
  }, [dispatch, setPrice, carts]);
  return (
    <>
      <div>
        <div style={{ padding: "10px 50px" }}>
          {carts.map((data) => {
            const product = ProductData?.find(
              (e) => data?.product_id === e?._id
            );

            return (
              <>
                <div
                  style={{
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                    padding: "10px 50px",
                  }}
                  className="cartResponsiveMainDiv"
                >
                  <div className="cartResponsiveMainDiv-1">
                    <div>
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/images/${product?.product_image[0]}`}
                        alt="bodyimage"
                        style={{ width: "100px" }}
                      />
                    </div>
                    <div>
                      <p style={{ fontSize: "18px", fontWeight: "600" }}>
                        {product?.product_title}
                      </p>
                      <p>Color</p>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        cursor: "pointer",
                        background: "#ddd",
                        border: "1px solid #ff6900",
                        borderRadius: "50px",
                        color: "#111",
                        marginBottom: "20px",
                        marginRight: "10px",
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 24,
                          marginLeft: "10px",
                          padding: "5px 10px",
                        }}
                        onClick={() => handleDec(data)}
                      >
                        -
                      </span>
                      <span style={{ fontSize: 24, padding: "5px 10px" }}>
                        {data.total_count}
                      </span>
                      <span
                        style={{
                          fontSize: 24,
                          marginRight: "10px",
                          padding: "5px 10px",
                        }}
                        onClick={() => handleIncrease(data)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "18px", fontWeight: "600" }}>
                      ₹{" "}
                      {(
                        (product?.product_price -
                          (product?.product_price * product?.product_discount) /
                            100) *
                        data?.total_count
                      ).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <button
                      style={{
                        background: "#ff6900",
                        border: "1px solid #ff6900",
                        borderRadius: "50px",
                        width: "160px",
                        height: "40px",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#fff",
                      }}
                      onClick={() => handleRemove(data)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <div className="cartResponsiveMainDiv-final">
            <div
              style={{
                // border: "1px solid black",
                marginRight: "20%",
              }}
            >
              <p>
                <span
                  style={{ fontSize: "20px", fontWeight: "600", color: "#000" }}
                >
                  Total:
                </span>{" "}
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#FF6900",
                    marginLeft: "10px",
                  }}
                >
                  ₹{price}
                </span>
              </p>
            </div>
            <div>
              <Link to="/checkout">
                <button
                  style={{
                    background: "#ff6900",
                    border: "1px solid #ff6900",
                    borderRadius: "40px",
                    padding: "8px 45px",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                  onClick={(e) => handleCheckOut(e)}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
