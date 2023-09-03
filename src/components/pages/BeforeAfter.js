import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPost } from "../../redux/actions/PostAction";

const BeforeAfter = () => {
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  const [beforeData, setBeforeData] = useState();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setBeforeData(
      PostData?.filter(
        (data) =>
          data?.categorie === "Before And After" ||
          data?.categorie === "Before And After Title"
      )
    );
  }, [setBeforeData, PostData]);
  console.log(beforeData);
  return (
    <>
      <div className="container-fluid">
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
              Before & After
            </h1>
            {beforeData?.length > 0 &&
              beforeData?.map((data, index) => {
                if (data?.categorie !== "Before And After") {
                  return (
                    <p
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        padding: "0px 10%",
                        width: "100%",
                      }}
                      className="py-2"
                    >
                      {data?.title}
                    </p>
                  );
                }
              })}
          </div>
        </div>
        <div className="row py-2">
          {beforeData?.length > 0 &&
            beforeData?.map((data, index) => {
              if (data?.categorie !== "Before And After Title") {
                return (
                  <div className="col-12 col-sm-4 ">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                        data?.post_image ? data?.post_image[0] : ""
                      }`}
                      alt="BeforeAfter1 "
                      className="img-fluid"
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default BeforeAfter;
