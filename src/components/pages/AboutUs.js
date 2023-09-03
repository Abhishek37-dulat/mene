import React, { useEffect, useState } from "react";
import Marquees from "./Marquees";

import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../redux/actions/PostAction";

const AboutUs = () => {
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  const [aboutData, setAboutData] = useState();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setAboutData(PostData?.filter((data) => data?.categorie === "About Us"));
  }, [setAboutData, PostData]);
  console.log(aboutData);
  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{ marginTop: "40px", fontWeight: "600", fontSize: "44px" }}
            >
              About Us
            </h1>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <p style={{ marginTop: "50px" }}>ＯＵＲ ＳＴＯＲＹ</p>
          </div>
        </div>
        <div
          className="row"
          style={{
            padding: "0px 10%",
            width: "100%",
            // border: "1px solid black",
          }}
        >
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-2  d-flex align-items-center justify-content-center">
            <h3
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "32px",
              }}
              className="about-heading"
            >
              Maneology is a product of love. A love for beauty, quality and
              strength. A love for hair weaves and a love for all those who wear
              them.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-2  d-flex align-items-center justify-content-center">
            <p style={{ textAlign: "center" }}>
              We believe that to truly love a piece of hair extension means to
              utilize every inch of it, to empower those who spend on it <br />{" "}
              and to honour those who craft it.
            </p>
          </div>
        </div>

        {aboutData?.length > 0 &&
          aboutData?.map((data, index) => {
            if (index % 2 === 0) {
              return (
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-2  ">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                        data?.post_image ? data?.post_image[0] : ""
                      }`}
                      alt="aboutus"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-4 ">
                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "600",
                        marginTop: "30px",
                        margin: "30px 20px",
                      }}
                    >
                      {data?.title}
                    </h3>
                    <p style={{ marginTop: "10px", margin: "30px 20px" }}>
                      {data?.description}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="row " style={{ marginTop: "40px" }}>
                  <div className="col-12 col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                    <h3 style={{ margin: "20px 20px", fontWeight: "600" }}>
                      {data?.title}
                    </h3>
                    <p style={{ margin: "20px 20px" }}>{data?.description}</p>
                    <button className="collectionBtn">SEE COLLECION</button>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                        data?.post_image ? data?.post_image[0] : ""
                      }`}
                      alt="about"
                      style={{ marginTop: "30px", width: "100%" }}
                    />
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};

export default AboutUs;
