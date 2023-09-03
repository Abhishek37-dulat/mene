import React from "react";
import { useEffect } from "react";
import {
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsEnvelopeOpenFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../redux/actions/PostAction";
import { useState } from "react";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  const [contactData, setContactData] = useState();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setContactData(
      PostData.filter(
        (data) =>
          data.categorie === "Mobile" ||
          data.categorie === "Email" ||
          data.categorie === "Address"
      )
    );
  }, [setContactData, PostData]);
  console.log(contactData);

  return (
    <>
      <div className="container py-4">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{ marginTop: "40px", fontWeight: "600", fontSize: "44px" }}
            >
              Contact Us
            </h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>Fill this form to get in touch by our team</h3>
          </div>
        </div>
        <div className="row contact-us">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <input type="text" placeholder="First name" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <input type="number" placeholder="Apartment, suit, etc." />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <input type="textarea" placeholder="Your comments" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <button className="contact-send-message">Send Message</button>
            </div>
          </div>
        </div>

        <div className="row py-4">
          {contactData?.map((data, index) => {
            return (
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="contactCard">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {data.categorie === "Mobile" ? (
                      <BsFillTelephoneFill
                        style={{
                          color: "#ff6900",
                          fontSize: "36px",
                          marginTop: "20px",
                        }}
                      />
                    ) : null}
                    {data.categorie === "Email" ? (
                      <BsEnvelopeOpenFill
                        style={{
                          color: "#ff6900",
                          fontSize: "36px",
                          marginTop: "20px",
                        }}
                      />
                    ) : null}
                    {data.categorie === "Address" ? (
                      <BsGeoAltFill
                        style={{
                          color: "#ff6900",
                          fontSize: "36px",
                          marginTop: "20px",
                        }}
                      />
                    ) : null}{" "}
                    <h4 style={{ textAlign: "center" }} className="py-2">
                      <b>
                        {data.categorie === "Mobile" ? "Mobile No." : ""}
                        {data.categorie === "Email" ? "Email" : ""}
                        {data.categorie === "Address" ? "Address" : ""}{" "}
                      </b>
                    </h4>
                    <p style={{ textAlign: "center", padding: "0px 10px" }}>
                      {data.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13718.791270717367!2d76.74021565541993!3d30.726894500000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed12c5ef4623%3A0xb5bd0d4a12f8c5eb!2sManeology%20-%20Best%20Hair%20Transplant%20in%20Chandigarh!5e0!3m2!1sen!2sin!4v1691582757109!5m2!1sen!2sin"
              style={{
                border: "0",
                width: "100%",
                height: "450px",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
