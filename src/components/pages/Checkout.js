import React, { useState, useEffect, useContext, useRef } from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FinalOrder from "../FinalOrder";
import Login from "../Login";
import { DataContext } from "../../context/authContext";
import Empty from "./Empty";
import env from "react-dotenv";
import {
  addUserAddress,
  getUserAddress,
} from "../../redux/actions/AddressAction";
import Form from "react-bootstrap/Form";

const Checkout = () => {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState();
  const [modalShow, setModalShow] = useState(false);
  const getdata = useSelector((state) => state.cartreducer.carts);
  const [price, setPrice] = useState(0);
  const [dPrice, setDPrice] = useState(0);
  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const { accountStatus, userDetails, setUserDetails } =
    useContext(DataContext);
  const [toggleAddress, setToggleAddress] = useState(false);
  const { UserAddress } = useSelector((state) => state.AddressReducer);
  const { carts } = useSelector((state) => state.cartReducers);
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const [finalAddressData, setFinalAddressData] = useState();
  const [saveAddress, setSaveAddress] = useState({
    address: "",
    city: "",
    state: "",
    pin_code: "",
  });
  const [finalProductData, setFinalProductData] = useState([]);
  const finalP = Number(price) + Number(dPrice);
  const selectAddress = useRef();

  console.log(carts);

  var todayDate = new Date().toISOString().slice(0, 10);
  console.log("address", UserAddress, userDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSeletAddress = (e, data) => {
    setFinalAddressData(data);
  };
  const handleSaveAddress = (user) => {
    console.log(saveAddress);
    dispatch(addUserAddress(saveAddress));
    dispatch(getUserAddress(userDetails?._id));
  };

  const handleSaveAddressChange = (e) => {
    setSaveAddress({ ...saveAddress, [e.target.name]: e.target.value });
  };
  // const userlogout = ()=>{
  //     localStorage.removeItem("user_login")
  //     history("/");
  // }
  console.log(accountStatus);

  const handlePlaceOrder = (e) => {
    if (!finalAddressData) {
      alert("Please Select Address");
    } else {
      setModalShow(true);
    }
  };
  useEffect(() => {
    dispatch(getUserAddress(userDetails?._id));
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("userdata");
    const temp = JSON.parse(data);
    console.log("console: ", temp);
    setUserDetails(temp);
  }, []);
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
  useEffect(() => {
    let w = 0;
    carts?.map((ele) => {
      let product = ProductData?.find((e) => ele?.product_id === e?._id);
      w = ((product?.product_weight * 1000) / 500) * ele?.total_count * 26 + w;
    });
    setDPrice(w.toFixed(2));
  }, [dispatch, setDPrice, carts]);

  console.log("userDetails: ", userDetails);

  return (
    <>
      {!accountStatus ? (
        <Login />
      ) : (
        <>
          <div className="container-fluid">
            <div className="row py-2 mx-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-7 checkout-contact">
                <h5>Contact</h5>
                Email: {userDetails?.email}
                <br />
                Mobile no. :{userDetails?.phone}
                <br />
                <br />
                <h5>Shipping Address</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {UserAddress?.map((data, index) => {
                    return (
                      <Card
                        key={index}
                        style={{
                          width: "18rem",
                          margin: "4px 10px",
                        }}
                      >
                        <Card.Body>
                          <input
                            type="radio"
                            name="radio"
                            style={{ width: "20px", height: "20px" }}
                            onClick={(e) => handleSeletAddress(e, data)}
                          />
                          <Card.Subtitle className="mb-2">
                            {userDetails?.first_name +
                              " " +
                              userDetails?.last_name}
                          </Card.Subtitle>
                          <Card.Text>
                            {data?.address}
                            <br />
                            {data?.city},{data?.state},{data?.pin_code}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      //   </div>
                      // </div>
                    );
                  })}
                </div>
                {!toggleAddress ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      padding: "20px 0px",
                    }}
                  >
                    <button
                      className="addAddress"
                      onClick={() => setToggleAddress(true)}
                    >
                      Add New Address
                    </button>
                  </div>
                ) : null}
                {toggleAddress ? (
                  <>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <b>Full Name</b>:{" "}
                        {userDetails?.first_name + " " + userDetails?.last_name}
                      </div>
                    </div>
                    <input
                      type="text"
                      name="address"
                      onChange={(e) => handleSaveAddressChange(e)}
                      value={saveAddress?.address}
                      placeholder="Apartment, suit, etc."
                    />
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <input
                          name="city"
                          onChange={(e) => handleSaveAddressChange(e)}
                          value={saveAddress?.city}
                          type="text"
                          placeholder="City "
                        />
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <input
                          name="pin_code"
                          onChange={(e) => handleSaveAddressChange(e)}
                          value={saveAddress?.pin_code}
                          type="text"
                          placeholder="Pin Code "
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <input
                          name="state"
                          onChange={(e) => handleSaveAddressChange(e)}
                          value={saveAddress?.state}
                          type="text"
                          placeholder="State "
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          padding: "20px 0px",
                        }}
                      >
                        <button
                          className="addAddress"
                          onClick={() => handleSaveAddress(userDetails)}
                        >
                          Save Address
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5"
                style={{ background: "#ff6900" }}
              >
                <div className="row">
                  {carts.map((d, index) => {
                    const product = ProductData?.find(
                      (e) => d?.product_id === e?._id
                    );

                    return (
                      <>
                        <div
                          className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 py-2"
                          key={index}
                        >
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/images/${product?.product_image[0]}`}
                            alt="checkout img"
                            style={{ width: "90px", height: "80px" }}
                          />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-3">
                          <p>{product?.product_title}</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 py-3">
                          <span>
                            Rs.{" "}
                            {(product?.product_price -
                              (product?.product_price *
                                product?.product_discount) /
                                100) *
                              d?.total_count}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="row py-4">
                  <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                    <input
                      type="text"
                      placeholder="  Gift Card or Discount Code"
                      className="discountField"
                      style={{
                        width: "280px",
                        height: "40px",
                        border: "1px solid #fff",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <button
                      className="applyCodeBtn"
                      style={{
                        background: "#C0C0C0",
                        border: "1px solid #ff6900",
                        borderRadius: "5px",
                        width: "85px",
                        height: "40px",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                      <p>Subtotal</p>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <p style={{ fontWeight: 600, fontSize: "18px" }}>
                        ₹ {price}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                      <p>Shipping</p>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <p>{dPrice}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                      <p style={{ fontWeight: 600, fontSize: "18px" }}>Total</p>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <p
                        className=""
                        style={{ fontWeight: 600, fontSize: "18px" }}
                      >
                        ₹ {finalP}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  // border: "1px solid black",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "20px 5px",
                }}
              >
                <div>
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <p
                      className="checkoutReturn2"
                      style={{
                        color: "#ff6900",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      <AiOutlineArrowLeft />
                      Return to Cart
                    </p>
                  </Link>
                </div>
                <div>
                  <button
                    style={{
                      background: "#ff6900",
                      border: "1px solid #ff6900",
                      borderRadius: "50px",
                      padding: "7px 15px",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    // className="checkoutBtn2"
                    onClick={() => setModalShow(true)}
                  >
                    Place Order
                  </button>

                  <FinalOrder
                    show={modalShow}
                    finaladdressdata={finalAddressData}
                    userdata={userDetails}
                    price={finalP}
                    carts={carts}
                    productdata={ProductData}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Checkout;
