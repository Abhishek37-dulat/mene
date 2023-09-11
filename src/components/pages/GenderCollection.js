import React from "react";
import { imageURL } from "../../Constants/Data";

const GenderCollection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "44px",
              }}
            >
              Male Collection
            </h1>
          </div>
        </div>
        <div className="row py-4">
          {imageURL.map((data, id) => {
            return (
              <>
                <div className="col-12 col-sm-12 col-lg-3 col-xl-3" key={id}>
                  <img
                    src={data?.Img}
                    alt="md"
                    style={{
                      width: "90%",
                      height: "auto",
                      margin: "0 auto",
                      cursor: "pointer",
                      display: "block",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "#ff6900",
                    }}
                  >
                    {data.Text}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GenderCollection;
