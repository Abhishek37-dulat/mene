import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import WriteReview from "./WriteReview";
// import CustomerComments from "./CustomerComments";

const CustomerReview = () => {
  // const getdata = useSelector((state) => state.cartreducer.carts);

  const now5 = 100;
  const now4 = 80;
  const now3 = 50;
  const now2 = 20;
  const now1 = 10;

  return (
    <>
      <div className="container">
        <div className="row mx-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 py-4 ">
            <div>
              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: 600,
                  marginLeft: "40px",
                  textAlign: "center",
                }}
                className="numberRating"
              >
                5
              </h3>
              <span
                style={{
                  color: "#FDCC0D",
                  fontSize: "25px",
                  textAlign: "center",
                  marginLeft: "90px",
                }}
                className="starRating"
              >
                ★★★★★
              </span>
              <br />
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  marginLeft: "120px",
                }}
                className="reviewRating"
              >
                2 Review
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 py-4 align-items-center justify-content-center">
            <div className="progressRating">
              <div className="row ">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">5 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now5}
                    label={`${now4}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">4 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now4}
                    label={`${now4}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">3 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now3}
                    label={`${now3}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">2 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now2}
                    label={`${now2}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">1 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now1}
                    label={`${now1}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#exampleModalLong"
              style={{
                border: "1px solid #000",
                width: "130px",
                height: "40px",
                background: "#fff",
              }}
            >
              Write Review
            </button>
            <div
              className="modal fade"
              id="exampleModalLong"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <WriteReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
