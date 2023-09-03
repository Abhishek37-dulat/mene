import React from "react";
import { FaShuttleVan, FaRecycle } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";

const ServicesTags = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 ol-sx-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
          <div className="row py-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
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
                  <FaShuttleVan
                    style={{
                      color: "#ff6900",
                      fontSize: "36px",
                      marginTop: "20px",
                    }}
                  />
                  <h5 style={{ textAlign: "center" }} className="py-2">
                    <b>Free Domestic Shipping</b>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
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
                  <FaRecycle
                    style={{
                      color: "#ff6900",
                      fontSize: "36px",
                      marginTop: "20px",
                    }}
                  />
                  <h5 style={{ textAlign: "center" }} className="py-2">
                    <b>Ships within 2-3 days</b>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
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
                  <MdLocalOffer
                    style={{
                      color: "#ff6900",
                      fontSize: "36px",
                      marginTop: "20px",
                    }}
                  />
                  <h5 style={{ textAlign: "center" }} className="py-2">
                    <b>Cash on Delivery Available</b>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
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
                  <BsFillGeoAltFill
                    style={{
                      color: "#ff6900",
                      fontSize: "36px",
                      marginTop: "20px",
                    }}
                  />
                  <h5 style={{ textAlign: "center" }} className="py-2">
                    <b>National orders accepted</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesTags;
