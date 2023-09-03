import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../redux/actions/PostAction";
import env from "react-dotenv";

const HelpMe = () => {
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  const [helpData, setHelpData] = useState();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setHelpData(PostData.filter((data) => data.categorie === "Help Me"));
  }, [setHelpData, PostData]);
  console.log(helpData);
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 ol-sx-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
            <h1
              style={{
                color: "#ff6900",
                textAlign: "center",
                marginTop: "80px",

                fontWeight: 600,
              }}
            >
              What would you like your Hair <br />
              extensions to do for you?
            </h1>
            <p style={{ textAlign: "center" }} className="py-2">
              {" "}
              Find Maneology products based on your unique hair style needs.
            </p>
          </div>
        </div>
        {helpData?.length > 0 &&
          helpData?.map((data, index) => {
            if (index % 2 === 0) {
              return (
                <div className="row py-4">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-2  d-flex align-items-center justify-content-center">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                        data?.post_image ? data?.post_image[0] : ""
                      }`}
                      alt=""
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
                <div className="row py-2">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  ">
                    <h4 style={{ fontWeight: "600", marginTop: "110px" }}>
                      {data?.title}
                    </h4>
                    <p style={{ marginTop: "10px", margin: "30px 20px" }}>
                      {data?.description}
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  d-flex align-items-center justify-content-center">
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

export default HelpMe;
