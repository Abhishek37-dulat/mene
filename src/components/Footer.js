import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPost } from "../redux/actions/PostAction";

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
        <div className="container-xxl">
          <div className="row">
            <div
              className="column col-12 col-md-6 col-lg-3 col-xl-4"
              style={{ top: "20px" }}
            >
              {footerData?.length > 0 &&
                footerData?.map((data, index) => {
                  if (data?.categorie === "Logo") {
                    return (
                      <>
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                            data?.post_image ? data?.post_image[0] : ""
                          }`}
                          alt="logo"
                          style={{ marginBottom: "20px", width: "100px" }}
                          className="footer-logo"
                        />
                        <p className="text-white footer-para">
                          {data?.description}
                        </p>
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
                <Link className=" py-2 mb-1 footer-link" to="/">
                  Home
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/help-me">
                  Help Me Choose
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/about-us">
                  About Us
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/contact-us">
                  Contact Us
                </Link>
                <Link className=" py-2 mb-1 footer-link" to="/">
                  Reviews
                </Link>
              </div>
            </div>
            <div className="column col-12 col-md-6 col-lg-3 col-xl-2">
              <h5 className="text-white mb-4 foot-1">SOCIAL</h5>
              <div className="footer-links d-flex flex-column">
                <a
                  href="https://www.instagram.com/maneologyglobal/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  className="py-2"
                >
                  <BsInstagram className="fs-4" /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/maneology/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  className="py-2"
                >
                  <BsFacebook className="fs-4" /> Facebook
                </a>
                <a
                  href="https://www.youtube.com/@maneology8911"
                  style={{ textDecoration: "none", color: "#fff" }}
                  className="py-2"
                >
                  <BsYoutube className="fs-4 " /> Youtube
                </a>
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
                <Link className=" py-2 mb-1 footer-link" to="/contact-us">
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
