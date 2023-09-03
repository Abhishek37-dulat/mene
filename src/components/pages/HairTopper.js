import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getSingleProduct } from "../../redux/actions/productAction";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HairTopper = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(7000);
  const [progress, setProgress] = useState(7000);
  const [price, setPrice] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cateName, setCateName] = useState("");
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const [cateData, setCateData] = useState([]);
  const [pCateData, setPCateData] = useState([]);

  const send = (e) => {
    // dispatch(DISPLAY(e));
  };

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "min") {
      setPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const filterProducts = (product) => {
    if (minPrice !== "" && product.product_price < parseFloat(minPrice)) {
      return false;
    }
    if (maxPrice !== "" && product.product_price > parseFloat(maxPrice)) {
      return false;
    }
    return true;
  };

  const handleProgressChange = (product) => {
    const newProgress = parseInt(product.target.value);
    setProgress(newProgress);
    setMaxPrice(newProgress);
  };
  const handleChangeCate = (data) => {
    localStorage.removeItem("ATC");
    localStorage.setItem("ATC", data);
    setCateName(data);
    navigate(`/collection/${data}`);
  };

  const handleSingleProduct = (product) => {
    dispatch(getSingleProduct(product));
  };

  useEffect(() => {
    let name = localStorage.getItem("ATC");
    setCateName(name);
  }, [dispatch, cateName, ProductData, setCateName]);
  useEffect(() => {
    const data = ProductData?.map((data) => {
      return data?.product_categories[0].name;
    });
    const newData = [...new Set(data)];
    setCateData(newData);
    const Productbeforedata = newData?.map((item, index) => {
      const temp = ProductData?.find(
        (data) => data.product_categories[0].name === item
      );
      return temp;
    });
    setPCateData(Productbeforedata);
  }, [setCateData, ProductData]);
  console.log(cateName);

  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-4">
            <h3 style={{ textAlign: "center" }}>{cateName ? cateName : ""}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <h4
              style={{ fontSize: "24px", fontWeight: 600, marginLeft: "15px" }}
            >
              Price
            </h4>
            <p style={{ marginLeft: "15px" }}>
              The highest price is Rs. 7.000.00
            </p>
            {/* <div>
              <label
                htmlFor="minPrice"
                style={{ marginLeft: "5px", fontWeight: 600, fontSize: "15px" }}
              >
                Min Price:
              </label>
              <input
                type="number"
                id="minPrice"
                name="min"
                value={minPrice}
                onChange={handleFilterChange}
                style={{
                  marginLeft: "15px",
                  border: "1px solid #ff6900",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              />
            </div> */}

            <div
              className="progress-bar"
              style={{ background: "#fff", height: "40px", width: "220px" }}
            >
              <input
                type="range"
                min="500"
                max="7000"
                value={progress}
                onChange={handleProgressChange}
                style={{ backgroundColor: "#ff6900", width: "100%" }}
              />
            </div>

            <div>
              <label
                htmlFor="maxPrice"
                style={{ marginLeft: "5px", fontWeight: 600, fontSize: "15px" }}
              >
                Price:
              </label>
              <input
                type="number"
                id="maxPrice"
                name="max"
                value={maxPrice}
                onChange={handleFilterChange}
                style={{
                  marginLeft: "12px",
                  border: "1px solid #ff6900",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="collectionPageData">
              <h4
                style={{
                  marginTop: "25px",
                  marginLeft: "15px",
                  fontWeight: 600,
                }}
              >
                Our Collection
              </h4>
              {cateData?.map((coll) => {
                return (
                  <>
                    <ul>
                      <li
                        onClick={() => handleChangeCate(coll)}
                        className="collectionPageList"
                      >
                        {coll}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <section className="main-card--container">
              {ProductData?.map((product) => {
                if (product.product_categories[0].name === cateName) {
                  if (filterProducts(product)) {
                    return (
                      <>
                        <div className="card-container">
                          <div className="hover-wishlist">
                            <Card className="card">
                              <div
                                className="card-body"
                                onClick={() => handleSingleProduct(product)}
                              >
                                <div
                                  className="hide"
                                  style={{ marginLeft: "-30px" }}
                                >
                                  <AiFillHeart
                                    style={{
                                      fontSize: "25px",
                                      color: "#ff6900",
                                    }}
                                  />
                                  <AiOutlineHeart
                                    style={{ fontSize: "25px" }}
                                  />
                                </div>
                                <NavLink
                                  to={`/cart/${product?._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <img
                                    src={`${process.env.REACT_APP_BACKEND_URL}/images/${product?.product_image[0]}`}
                                    alt="images"
                                    className="card-media"
                                    onClick={() => send(product)}
                                  />
                                  <h4
                                    className="card-title"
                                    onClick={() => send(product)}
                                  >
                                    {product?.product_title}
                                  </h4>
                                </NavLink>
                                <span className="card-rating">
                                  product.rating
                                </span>
                                <div className="card-price">
                                  {product?.product_price}
                                </div>
                              </div>
                            </Card>
                          </div>
                        </div>
                      </>
                    );
                  } else {
                    return null;
                  }
                } else {
                  return null;
                }
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HairTopper;
