import React from "react";

import { useState } from "react";
import { useEffect } from "react";

const HairTransformation = ({ PostData }) => {
  const [htData, setHTData] = useState();
  useEffect(() => {
    setHTData(
      PostData.filter((data) => data.categorie === "Hair Transformation")
    );
  }, [setHTData, PostData]);
  console.log(htData);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3 className="py-3 text-center" style={{ fontWeight: 600 }}>
              <span style={{ color: "#ff6900" }}>Hair </span>Transformations
            </h3>
          </div>
        </div>
        <div className="row">
          {htData?.map((data, index) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                    data?.post_image ? data?.post_image[0] : ""
                  }`}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HairTransformation;
