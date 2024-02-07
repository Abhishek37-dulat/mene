import React, { useContext, useEffect, useState } from "react";
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
import { Helmet } from "react-helmet";
import { getSingleSeo } from "../redux/actions/seoAction";
import { DataContext } from "../context/authContext";
import { Rating } from "@mui/material";
// import ZoomCom from "./ZoomCom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};

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
  const { SeoSingle } = useSelector((state) => state.seoReducers);
  const { accountStatus } = useContext(DataContext);
  const [tempSave, setTempSave] = useState([]);
  const [selectedLength, setSelectedLength] = useState("");

  const dispatch = useDispatch();
  const sendbuynow = (data) => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const finalData = {
        product_id: data?._id,
        color: selectedColorf,
        size: selectedSize,
        density: selectedDensity,
      };
      console.log(finalData, data);
      if (
        selectedColorf === "" ||
        selectedSize === "" ||
        selectedDensity === "" ||
        selectedDensity === "none" ||
        selectedLength === ""
      ) {
        toast.error("Please Select color, Size, Length and Desity!", {
          toastId: "success2",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: customSuccessToastStyleError,
        });
      } else {
        dispatch(ADD(finalData));
        dispatch(GetCartData());
        history("/checkout");
      }
    } else {
      history("/login");
    }
  };
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
      if (
        selectedColorf === "" ||
        selectedSize === "" ||
        selectedDensity === "" ||
        selectedDensity === "none" ||
        selectedLength === ""
      ) {
        toast.error("Please Select color, Size, Length and Desity!", {
          toastId: "success2",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: customSuccessToastStyleError,
        });
      } else {
        dispatch(ADD(finalData));
        dispatch(GetCartData());
      }
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
    console.log("i am called", id);
    if (accountStatus) {
      dispatch(AddToSaveData(id));
    } else {
      history("/login");
    }
  };

  const handleCallFavDelete = (id) => {
    console.log("i am called delete", id);

    if (accountStatus) {
      dispatch(RemoveFromSaveData(id));
    } else {
      history("/login");
    }
  };
  const handleChangeDensity = (e) => {
    setSelectedDensity(e.target.value);
  };
  const handleChangeSize = (e) => {
    console.log(e.target.value);
    setSelectedSize(e.target.value);
  };
  const handleChangeLength = (e) => {
    console.log(e.target.value);
    setSelectedLength(e.target.value);
  };
  const schemaJsonString = JSON.stringify(SeoSingle?.seo_schema);
  const ogJsonString = JSON.stringify(SeoSingle?.seo_open_graph);

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
    const tempdata = saveData?.filter(
      (item) => item?.product_id === tempDataFormat?._id
    );
    setTempSave(tempdata);
  }, [dispatch, saveData]);
  useEffect(() => {
    const tempData = localStorage.getItem("singleproduct");
    const tempDataFormat = JSON.parse(tempData);
    dispatch(getSingleSeo(tempDataFormat?._id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(GetCartData());

    const tempData = localStorage.getItem("singleproduct");
    const tempDataFormat = JSON.parse(tempData);
    dispatch(getAllComments(tempDataFormat?._id));
  }, [dispatch, singleProduct]);
  console.log(
    SeoSingle?.seo_schema,
    SeoSingle?.seo_open_graph,
    SeoSingle,
    ogJsonString
  );
  useEffect(() => {
    dispatch(getAllComments(id));
  }, []);
  useEffect(() => {
    console.log("commentdata", CommentData);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{SeoSingle?.seo_title}</title>
        <meta name="description" content={SeoSingle?.description} />
        {SeoSingle?.keywords?.map((data) => {
          return <meta name="keywords" content={data} />;
        })}

        <link rel="canonical" href={window.location.href} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={SeoSingle?.seo_title} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Meneology" />
        <meta
          property="og:image"
          content={singleProduct?.product_image[0].url}
        />
        <meta
          property="og:image:secure_url"
          content={singleProduct?.product_image[0].url}
        />

        <meta property="og:image:alt" content={SeoSingle?.seo_title} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SeoSingle?.seo_title} />
        <meta name="twitter:creator" content="@Meneology" />
        <meta
          name="twitter:image"
          content={`${process.env.REACT_APP_BACKEND_URL}/images/${singleProduct?.product_image[0]}`}
        />
        <meta name="twitter:label1" content="Time to buy" />
        <meta name="twitter:data1" content="Less than a minute" />

        <script type="application/ld+json">{SeoSingle?.seo_schema}</script>
      </Helmet>
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
                        src={data.url}
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
                        src: `${singleProduct?.product_image[changeImage]?.url}`,
                      },
                      largeImage: {
                        src: `${singleProduct?.product_image[changeImage]?.url}`,
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
                      <Rating name="read-only" value={2} readOnly />
                    </div>
                    <div className="wishlist-icon">
                      {tempSave?.length > 0 ? (
                        <AiFillHeart
                          style={{
                            fontSize: "25px",
                            color: "#ff6900",
                            cursor: "pointer",
                          }}
                          onClick={() => handleCallFavDelete(tempSave[0]?._id)}
                        />
                      ) : (
                        <AiOutlineHeart
                          style={{ fontSize: "25px", cursor: "pointer" }}
                          onClick={() => handleCallFav(singleProduct?._id)}
                        />
                      )}
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
                          <option value="none">None</option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                      </div>
                      <p style={{ marginLeft: "10px" }}> {selectedDensity}</p>
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

                    <div className="d-flex py-2">
                      <p className="py-1" style={{ fontWeight: "600" }}>
                        Length{" "}
                      </p>
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
                        {singleProduct?.product_hair_length?.map((data) => {
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
                                name="length"
                                value={data}
                                onChange={handleChangeLength}
                              />
                              {data}
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
                      onClick={() => sendbuynow(singleProduct)}
                      className="buyitnow"
                    >
                      {" "}
                      BUY IT NOW{" "}
                    </button>
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
      <ToastContainer />
    </>
  );
};

export default CardsDetails;
