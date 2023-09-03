import React from "react";
import { Link } from "react-router-dom";

const SuccessfullyReg = () => {
  return (
    <>
      <div className="container py-4">
        <div className="mb-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-success bi bi-check-circle-fill"
            width="75"
            height="75"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
        <div className="text-center">
          <h1>You have registered Successfully !</h1>
          <p style={{ fontSize: "20px", fontWeight: "600" }}>
            Please Login....{" "}
          </p>
          <Link to="/login">
            <button
              className="btn"
              style={{
                background: "#ff6900",
                color: "#fff",
                fontWeight: "600",
                width: "140px",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessfullyReg;
