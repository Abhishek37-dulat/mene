import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";

import { getApiKey } from "../redux/actions/payment";
import { Place } from "@mui/icons-material";
import { placeNewOrder } from "../redux/actions/CheckOutAction";
import { useNavigate } from "react-router-dom";
import {
  REMOVE,
  removeCartDetailsFromRedux,
} from "../redux/actions/cartAction";

const FinalOrder = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(props);
  const dlt = (id) => {
    let sendData = {
      items: props?.carts?.map((data) => {
        let product_price = props.productdata.find(
          (item) => item._id === data?.product_id
        ).product_price;
        let product_discount = props.productdata.find(
          (item) => item._id === data?.product_id
        ).product_discount;
        let final_pay =
          product_price - (product_price * product_discount) / 100;

        return {
          product_id: data?.product_id,
          price: final_pay,
          userID: props?.userdata?._id,
          color: data?.color,
          density: data?.density,
          size: data?.size,
          qty: data?.total_count,
        };
      }),
      delivery_charges: props?.delivery_charges,
      userID: props?.userdata?._id,
      delivery_address: {
        address: props?.finaladdressdata?.address,
        city: props?.finaladdressdata?.city,
        state: props?.finaladdressdata?.state,
        pin_code: props?.finaladdressdata?.pin_code,
      },
      finalAmt: props?.price,
    };
    dispatch(placeNewOrder(sendData));
    props?.carts?.map((data) => {
      return dispatch(REMOVE(data));
    });
    // dispatch(getApiKey(sendData, props.carts));
    // navigate("/thankyou");
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props?.carts?.map((d, index) => {
            const product = props?.productdata?.find(
              (e) => d?.product_id === e?._id
            );
            return (
              <>
                <div className="row">
                  <div className="col-12 col-sx-12 col-sm-12 col-lg-12 col-xl-12 d-flex">
                    <img
                      src={product?.product_image[0].url}
                      alt="final img"
                      style={{ width: "100px", height: "120px" }}
                    />
                    <div className="col-12 col-sx-12 col-sm-12 col-lg-12 col-xl-12 mx-2">
                      <h5>{product?.product_title}</h5>
                      <p>Total Quantity : {d?.total_count}</p>
                      <p>Color : {d?.color}</p>
                      <p>Density : {d?.density}</p>
                      <p>Size : {d?.size}</p>

                      {/* <p>Color: {d?.color}</p> */}
                      <p>
                        Price : ₹
                        {product?.product_price -
                          (product?.product_price * product?.product_discount) /
                            100}
                      </p>
                    </div>
                  </div>
                  <hr className="solid" />
                </div>
              </>
            );
          })}
          <hr className="solid" style={{ borderTop: "10px solid #bbb" }} />
          <p style={{ fontSize: "20px", fontWeight: "600" }}>
            Total Price : ₹{props?.price}
          </p>
          <p>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              Address :
            </span>{" "}
            <br />
            Name: - {props?.userdata?.first_name} {props?.userdata?.last_name}{" "}
            <br /> Mobile No. - {props?.userdata?.phone} <br />
            {props?.finaladdressdata?.address},{props?.finaladdressdata?.city},
            {props?.finaladdressdata?.state}-{props?.finaladdressdata?.pin_code}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            style={{
              background: "#ff6900",
              border: "1px solid #ff6900",
            }}
          >
            Cencel
          </Button>
          <Button
            style={{
              background: "#ff6900",
              border: "1px solid #ff6900",
            }}
            onClick={() => dlt()}
          >
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FinalOrder;
