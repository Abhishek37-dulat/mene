import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { DLT, ADD, REMOVE } from "../redux/actions/action";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import ReactImageMagnifier from "react-image-magnifier";
import ReactImageMagnify from "react-image-magnify";
import CustomerComments from "./CustomerComments";
import CustomerReview from "./CustomerReview";
import ProductColor from "./ProductColor";

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
import StepVideo from "./StepVideo";
import { AddToSaveData, RemoveFromSaveData } from "../redux/actions/SaveAction";
import { getAllComments } from "../redux/actions/CommentAction";
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
  const { CommentData } = useSelector((state) => state.CommentReducer);
  const [comments, setComments] = useState([]);
  const { saveData } = useSelector((state) => state.saveReducers);
  const [avgRating, setAvgRating] = useState(0);
  const [selectedColorf, setSelectedColorf] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDensity, setSelectedDensity] = useState("");

  const dispatch = useDispatch();
  const send = (data) => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const finalData = {
        product_id: data?._id,
        color: selectedColorf,
        size: selectedSize,
        density: selectedDensity,
      };
      console.log(finalData, data);
      dispatch(ADD(finalData));
      dispatch(GetCartData());
    } else {
      history("/login");
    }
  };

  const { carts } = useSelector((state) => state.cartReducers);

  const { singleProduct } = useSelector((state) => state.ProductReducer);
  console.log("singleProduct: ", singleProduct);

  const compare = () => {
    let comparedata = carts?.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  };

  const handleChangeImage = (productId) => {
    setChangeImage(productId);
  };

  const handleCallFav = (id) => {
    dispatch(AddToSaveData(id));
  };
  const handleCallFavDelete = (id) => {
    console.log("i am called");
    dispatch(RemoveFromSaveData(id));
  };
  const handleChangeDensity = (e) => {
    setSelectedDensity(e.target.value);
  };
  const handleChangeSize = (e) => {
    console.log(e.target.value);
    setSelectedSize(e.target.value);
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
            if (data?.product_id === tempDataFormat?._id) {
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

    const tempData = localStorage.getItem("singleproduct");
    const tempDataFormat = JSON.parse(tempData);
    dispatch(getAllComments(tempDataFormat?._id));
  }, [dispatch, singleProduct]);
  console.log(
    "color: ",
    selectedColorf,
    "Density:",
    selectedDensity,
    "Size: ",
    selectedSize,
    singleProduct
  );
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
                <div className="items_img">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "ourprod1",
                        isFluidWidth: true,
                        src: `${process.env.REACT_APP_BACKEND_URL}/images/${singleProduct?.product_image[changeImage]}`,
                      },
                      largeImage: {
                        src: `${process.env.REACT_APP_BACKEND_URL}/images/${singleProduct?.product_image[changeImage]}`,
                        width: 1200,
                        height: 1800,
                      },
                      lensStyle: {
                        width: 360,
                        height: 200,
                      },
                    }}
                  />
                </div>
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
                        onClick={() => handleCallFav(singleProduct?._id)}
                      />
                      <AiOutlineHeart
                        style={{ fontSize: "25px" }}
                        onClick={() => handleCallFavDelete(singleProduct?._id)}
                      />
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
                    <div className="d-flex">
                      <p style={{ fontWeight: "600" }}>Choose Density </p>

                      <div className="density">
                        <select
                          id="density"
                          value={selectedDensity}
                          onChange={handleChangeDensity}
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                      </div>
                      {selectedDensity}
                    </div>

                    <div className="d-flex">
                      <p style={{ fontWeight: "600" }}>Size </p>
                      <div
                        className="density"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        {singleProduct?.product_size_tags?.map((data) => {
                          return (
                            <div
                              style={{
                                padding: "5px 10px",
                                boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
                                marginLeft: "5px",
                                cursor: "pointer",
                                marginTop: "4px",
                              }}
                            >
                              <input
                                type="radio"
                                name="size"
                                value={data?.size}
                                onChange={handleChangeSize}
                              />
                              &#160;&#160;{data?.size} {data?.type}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p style={{ fontWeight: "600" }}>
                        Choose Color:{" "}
                        <ProductColor
                          selectedColorf={selectedColorf}
                          setSelectedColorf={setSelectedColorf}
                        />
                      </p>
                    </div>

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
        <StepVideo stepdata={singleProduct?.product_steps} />
        {/* <SuggestProducts /> */}
        <CustomerReview productID={singleProduct?._id} />
        <CustomerComments productID={singleProduct?._id} />
      </div>
    </>
  );
};

export default CardsDetails;
