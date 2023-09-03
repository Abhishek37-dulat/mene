import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

const WhyManeology = ({ PostData }) => {
  const [whyData, setWhyData] = useState();
  useEffect(() => {
    setWhyData(PostData.filter((data) => data.categorie === "Why Meneology"));
  }, [setWhyData, PostData]);
  return (
    <>
      <div className="container">
        {whyData?.map((data, index) => {
          return (
            <>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                  <div className="whymaneologyImg">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                        data?.post_image ? data?.post_image[0] : ""
                      }`}
                      alt="why manelogy"
                      style={{ width: "420px" }}
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-12  col-md-12 col-lg-6 col-xl-6 ">
                  <div className="whymaneology">
                    <h3>
                      <span style={{ color: "#ff6900" }}>Maneology</span> Hair
                      Promises
                    </h3>
                    <p>{data?.description}</p>
                    <Link to="/about-us">
                      <button
                        style={{
                          background: "#ff6900",
                          color: "#fff",
                          borderRadius: "50px",
                          border: "1px solid #ff6900",
                          width: "160px",
                          height: "40px",
                        }}
                      >
                        Why Maneology Hair
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default WhyManeology;
