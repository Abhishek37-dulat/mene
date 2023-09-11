import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        <div className="row py-4 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h1
              style={{
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "44px",
                textAlign: "center",
              }}
            >
              Page Not Found
            </h1>
          </div>
          <div className="row py-4 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <p style={{ textAlign: "center" }}>
                The page you were looking for doesnt exist. You may have
                mistyped the address or the page may have moved.
              </p>
            </div>
          </div>
          <div className="row py-4 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <div className="text-center">
                <button
                  className="pageNotFound "
                  style={{
                    background: "#ff6900",
                    border: "1px solid #ff6900",
                    borderRadius: "25px",
                    color: "#fff",
                    width: "200px",
                    height: "60px",
                    alignItems: "center",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
