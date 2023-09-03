import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { DLT, ADD, REMOVE } from "../redux/actions/action";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import ReactImageMagnifier from "react-image-magnifier";
import ReactImgZoom from "react-img-zoom";

import {
  ADD,
  DecreaseItem,
  GetCartData,
  IncreaseItem,
  REMOVE,
} from "../redux/actions/cartAction";
// import SuggestProducts from "./SuggestProducts";
// import CustomerReview from "./CustomerReview";
// import CustomerComments from "./CustomerComments";
// import ProductColor from "./ProductColor";
import { getSingleProduct } from "../redux/actions/productAction";
// import ZoomCom from "./ZoomCom";

const CardsDetails = () => {
  const history = useNavigate();
  const [data, setData] = useState([]);
  // const [toggleAdd]
  const [changeImage, setChangeImage] = useState(0);
  const [toggleAddToCart, setToggleAddToCart] = useState(true);
  const [localData, setLocalData] = useState();
  const [zoomed, setZoomed] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const send = (data) => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      dispatch(ADD(data));
      dispatch(GetCartData());
    } else {
      history("/login");
    }
  };

  const { carts } = useSelector((state) => state.cartReducers);

  const { singleProduct } = useSelector((state) => state.ProductReducer);
  console.log("singleProduct: ", singleProduct);

  const compare = () => {
    let comparedata = carts.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  };

  const handleChangeImage = (productId) => {
    setChangeImage(productId);
  };

  useEffect(() => {
    compare();
  }, []);
  useEffect(() => {
    const chechkCart = () => {
      const tempData = localStorage.getItem("singleproduct");
      const tempDataFormat = JSON.parse(tempData);
      setLocalData(tempDataFormat);
      return carts?.length > 0
        ? carts?.map((data) => {
            if (data.product_id === tempDataFormat._id) {
              setToggleAddToCart(false);
            }
          })
        : null;
    };
    chechkCart();
  }, [singleProduct, carts, dispatch]);
  useEffect(() => {
    const tempData = localStorage.getItem("singleproduct");
    const tempDataFormat = JSON.parse(tempData);
    dispatch(getSingleProduct(tempDataFormat));
  }, [dispatch]);
  useEffect(() => {
    dispatch(GetCartData());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid mt-2">
        <section className="container mt-3">
          <div className="iteamsdetails">
            <>
              <div className="smallImageClass">
                {singleProduct?.product_image?.map((data, index) => {
                  return (
                    <div
                      style={{ cursor: "pointer" }}
                      className={`smallImages ${
                        singleProduct?._id === changeImage ? "selected" : ""
                      }`}
                      onClick={() => setChangeImage(index)}
                    >
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/images/${data}`}
                        alt="images"
                        className="smallImage1"
                        onClick={() => handleChangeImage(singleProduct?._id)}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="items_img">
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/images/${singleProduct?.product_image[changeImage]}`}
                  alt="sadada"
                />
              </div>
              <div className="details">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <p
                      style={{
                        fontSize: "25px",
                        fontWeight: 600,
                        lineHeight: "22px",
                      }}
                      className="details_title"
                    >
                      {singleProduct?.product_title}
                    </p>

                    <div className="details_rating">
                      <p
                        style={{
                          color: "#FFA800",
                          padding: "2px 5px",
                          borderRadius: "5px",
                          fontSize: "22px",
                          top: "45px",
                          wordSpacing: "-5px",
                        }}
                        className="details_rating"
                      >
                        Reating
                        <span
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            fontWeight: "300",
                            marginLeft: "10px",
                          }}
                        >
                          <span>3</span>
                          <span style={{ marginLeft: "5px" }}>Reviews</span>
                        </span>
                      </p>
                    </div>
                    <div className="wishlist-icon">
                      <AiFillHeart
                        style={{ fontSize: "25px", color: "#ff6900" }}
                      />
                      <AiOutlineHeart style={{ fontSize: "25px" }} />
                    </div>
                    <p
                      style={{
                        color: "#ff6900",
                        fontSize: "25px",
                        fontWeight: "600",
                        top: "30px",
                      }}
                      className="details_price"
                    >
                      <strong>Price : </strong>₹ {singleProduct?.product_price}
                    </p>
                    <div className="details_desc">
                      <p>{singleProduct?.product_description}</p>
                    </div>
                    {/* <p>
                          <strong>Total : </strong>₹ {ele.price * ele.qnty}
                        </p> */}
                    {/* <ProductColor /> */}

                    {/* <div
                          className="mt-5 d-flex justify-content-between align-items-center increaseProducts mx-2"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            background: "#ddd",
                            border: "1px solid #ff6900",
                            borderRadius: "50px",
                            color: "#111",
                            marginBottom: "10px",
                            top: "20px",
                          }}
                        >
                          <span
                            style={{ fontSize: 24, marginLeft: "10px" }}
                            onClick={
                              ele.qnty <= 1
                                ? () => dlt(ele.id)
                                : () => remove(ele)
                            }
                          >
                            -
                          </span>
                          <span style={{ fontSize: 24 }}>{ele.qnty}</span>
                          <span
                            style={{ fontSize: 24, marginRight: "10px" }}
                            onClick={() => send(ele)}
                          >
                            +
                          </span>
                        </div> */}
                    {toggleAddToCart ? (
                      <button
                        style={{
                          width: "230px",
                          height: "50px",
                          background: "#ff6900",
                          color: "#fff",
                          border: "1px solid #ff6900",
                          borderRadius: "50px",
                        }}
                        className="addtocart"
                        onClick={() => send(singleProduct)}
                      >
                        {" "}
                        ADD TO CART{" "}
                      </button>
                    ) : null}
                    <NavLink to={"/checkout"}>
                      <button
                        style={{
                          width: "230px",
                          height: "50px",
                          background: "#ff6900",
                          color: "#fff",
                          border: "1px solid #ff6900",
                          borderRadius: "50px",
                          marginLeft: "5px",
                        }}
                        onClick={() => send(singleProduct)}
                        className="buyitnow"
                      >
                        {" "}
                        BUY IT NOW{" "}
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          </div>
        </section>
        <br />
        <div className="d-flex justify-content-center align-items-center">
          {/* <NavLink to="/">
            <Button style={{ background: "#ff6900" }}>Continue Shopping</Button>
          </NavLink> */}
        </div>
        {/* <SuggestProducts /> */}
        {/* <CustomerReview /> */}
        {/* <CustomerComments /> */}
      </div>
    </>
  );
};

export default CardsDetails;
