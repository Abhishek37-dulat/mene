import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPost } from "../redux/actions/PostAction";
import PaymentImage from "../images/payment-box.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Footer = () => {
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  const [footerData, setFooterData] = useState();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setFooterData(
      PostData.filter(
        (data) => data.categorie === "Logo" || data.categorie === "Mobile"
      )
    );
  }, [setFooterData, PostData]);
  console.log("footerData: ", footerData);
  return (
    <>
      <footer className="py-5">
        <div
          style={{
            width: "100%",
            margin: "0%",
            padding: "20px 30px",
          }}
        >
          <div className="row">
            <div
              className="column col-12 col-md-6 col-lg-3 col-xl-3"
              style={{
                top: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {footerData?.length > 0 &&
                footerData?.map((data, index) => {
                  if (data?.categorie === "Logo") {
                    return (
                      <>
                        <img
                          src={data?.post_image[0].url}
                          alt="logo"
                          style={{ marginBottom: "20px", width: "150px" }}
                          className="footer-logo"
                        />
                        <div className="footer-links d-flex flex-row">
                          <a
                            href="https://www.instagram.com/maneologyglobal/"
                            style={{ textDecoration: "none", color: "#fff" }}
                            className="py-2 mx-3"
                          >
                            <BsInstagram className="fs-4" />
                          </a>
                          <a
                            href="https://www.facebook.com/maneology/"
                            style={{ textDecoration: "none", color: "#fff" }}
                            className="py-2 mx-3"
                          >
                            <BsFacebook className="fs-4" />
                          </a>
                          <a
                            href="https://www.youtube.com/@maneology8911"
                            style={{ textDecoration: "none", color: "#fff" }}
                            className="py-2 mx-3"
                          >
                            <BsYoutube className="fs-4 " />
                          </a>
                        </div>
                      </>
                    );
                  }
                  if (data?.categorie === "Mobile") {
                    return (
                      <>
                        <a
                          href={`tel:${data?.title}`}
                          className="mt-2 d-block mb-2 text-white"
                        >
                          {data?.title}
                        </a>
                        <Link to="/" className="mt-2 d-block mb-2 text-white">
                          Know More
                        </Link>
                      </>
                    );
                  }
                })}
            </div>
            <div className="column col-12 col-md-6 col-lg-3 col-xl-2 ">
              <h5 className="text-white mb-4 foot-1">RESOURCES</h5>
              <div className="footer-links d-flex flex-column">
                <Link className=" py-2 mb-1 footer-link" to="/help-me">
                  Help Me Choose
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/about-us">
                  About Us
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/job-options">
                  Job Options
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/franchise">
                  Franchise
                </Link>

                <Link className=" py-2 mb-1 footer-link" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>

            <div className="column col-12 col-md-6 col-lg-3 col-xl-2">
              <h5 className="text-white mb-4 foot-1">POLICY</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1 footer-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link
                  className=" py-2 mb-1 footer-link"
                  to="/return-and-exchange-policy"
                >
                  Return and Exchange Policy
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link
                  className=" py-2 mb-1 footer-link"
                  to="/terms-of-services"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="column col-12 col-md-6 col-lg-3 col-xl-2">
              <h5 className="text-white mb-4 foot-1">SUPPORT</h5>
              <div className="footer-links d-flex flex-column">
                <Link className=" py-2 mb-1 footer-link" to="/why-maneology">
                  Why Maneology
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/contact">
                  How To Apply
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/before-and-after">
                  Before & After
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/">
                  Other Tracking
                </Link>
                <Link className="py-2 mb-1 footer-link" to="/faqs">
                  FAQ's
                </Link>
              </div>
            </div>
            <div
              className="column col-12 col-md-6 col-lg-3 col-xl-3"
              style={{
                top: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                overflow: "hidden",
              }}
            >
              <p className="text-white">Payment Methods</p>
              <p className="text-white">
                100% Payment Protection, Easy Return Policy.
              </p>
              <img
                src={PaymentImage}
                style={{ width: "150px" }}
                alt="payment ways"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <LocalShippingIcon
                  sx={{
                    color: "#00A03C",
                    fontSize: "38px",
                    webkitTransform: "scaleX(-1)",
                    transform: "scaleX(-1)",
                    marginRight: "20px",
                  }}
                />
                <button className="freeShiping">Free Shipping</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                Maneology @{new Date().getFullYear()} All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
