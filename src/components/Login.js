import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authenticatesLogin } from "../service/api";
import { useContext } from "react";
import { DataContext } from "../context/authContext";
import { useDispatch } from "react-redux";
import { GetCartData } from "../redux/actions/cartAction";

const Login = () => {
  const { setAccountStatus, setUserDetails } = useContext(DataContext);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  // const [data, setData] = useState([]);
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

  const addData = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      const data = await authenticatesLogin({
        username: email,
        password: password,
      });
      if (data?.response?.status === 400) {
        setAccountStatus(false);
        toast.error("wrong Username or password!", {
          position: "top-center",
        });
      } else {
        const token = localStorage.getItem("token");
        if (token) {
          const trydata = JSON.parse(atob(token.split(".")[1]));

          setUserDetails(trydata.userExits);
        }

        setAccountStatus(true);
        dispatch(GetCartData());
        history(-1);
      }
    }
  };

  // useEffect(() => {
  //   toast.success("You have reg", {
  //     position: "top-center",
  //   });
  // }, []);

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <h4 style={{ textAlign: "center" }} className="py-4">
            CUSTOMER LOGIN
          </h4>
          <ToastContainer />
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registered User</h3>
            <p style={{ position: "relative", bottom: "15px" }}>
              If you have an account, sign in with your email address.
            </p>
            <div className="form-group mt-3">
              <label>Email </label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={getdata}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={getdata}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
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
            </div>
            <div className="d-flex">
              <p className="forgot-password text-right mt-2">
                Forgot{" "}
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#ff6900" }}
                >
                  password?
                </Link>
              </p>
              <p className="signup-your-account mt-2">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#ff6900" }}
                >
                  Signup Your Account
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
