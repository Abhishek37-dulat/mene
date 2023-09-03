import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authenticatesSignup } from "../service/api";

const SignUp = () => {
  const history = useNavigate();
  const [flag, setFlag] = useState(false);
  const [inpval, setInpval] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });
  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    console.log(e.target.value);

    const { value, name } = e.target;
    console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, mobile, password, confirmpassword } =
      inpval;

    if (firstname === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (lastname === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (mobile === "") {
      toast.error("mobile field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (confirmpassword.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      authenticatesSignup({
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: mobile,
        password: password,
        confirm_password: confirmpassword,
      });
      toast.success("Registration successfully!", {
        position: "top-right",
      });
      history("/customer/signup-successfully");
    }
  };

  useEffect(() => {
    console.log("success");
  }, [flag]);

  return (
    <>
      <div className="Signup-form-container">
        <form className="Signup-form">
          <h4 style={{ textAlign: "center" }} className="py-4">
            USER REGISTRATION
          </h4>
          <div className="Signup-form-content">
            <h3 className="Signup-form-title">Become User</h3>
            <p style={{ position: "relative", bottom: "15px" }}>
              If you are new to our store, we glad to have you as member.
            </p>
            <div className="form-group mt-3">
              <label>First Name </label>
              <input
                type="text"
                name="firstname"
                onChange={getdata}
                className="form-control mt-1"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name </label>
              <input
                type="text"
                name="lastname"
                onChange={getdata}
                className="form-control mt-1"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email </label>
              <input
                type="email"
                name="email"
                onChange={getdata}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile No. </label>
              <input
                type="email"
                name="mobile"
                onChange={getdata}
                className="form-control mt-1"
                placeholder="Enter mobile number"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={getdata}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                onChange={getdata}
                className="form-control mt-1"
                placeholder="Enter confirm password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/customer/account/user-profile">
                {" "}
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: "#ff6900",
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  onClick={addData}
                >
                  Submit
                </button>
                <ToastContainer />
              </Link>
              <p className="forgot-password text-right mt-2">
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#ff6900",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  Login Your Account!
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
