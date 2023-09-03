import React from "react";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <>
      <div className="container py-4">
        <div className="text-center">
          <h1>Sorry, Your Payment is Failed 😞 !</h1>
          <p>Someting Error......... </p>
        </div>
        <div className="mb-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-danger bi bi-x-circle-fill"
            width="75"
            height="75"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm3.293 11.293a.999.999 0 0 1-1.414 0L8 9.414l-2.88 2.879a.999.999 0 1 1-1.414-1.414L6.586 8 3.707 5.12a.999.999 0 1 1 1.414-1.414L8 6.586l2.879-2.88a.999.999 0 1 1 1.414 1.414L9.414 8l2.88 2.879a.999.999 0 0 1 0 1.414z" />
          </svg>
        </div>
        <div className="text-center">
          <Link to="/">
            <button
              className="btn"
              style={{
                background: "#ff6900",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentFailed;
