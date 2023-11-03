import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Job from "../../images/job.jpg";

const JobOptions = () => {
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
      toast.success("Registration successfully!", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    console.log("success");
  }, [flag]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Job Options - Maneology</title>
        <meta
          name="description"
          content="Looking for the best hair transplant clinic in Chandigarh Our clinic offers advanced hair transplant solutions with natural looking results Call us"
        />
        <meta
          name="keywords"
          content="Hair replacement in chandigarh, Hair replacement in Mohali, Hair replacement in Panchkula, Hair transplant in chd, Hair transplant in Panchkula, Hair transplant in Mohali, Hair fixing in chd, Hair fixing in panchkula, Hair fixing in Mohali ,Hair wig in chandigarh, Hair wig in Mohali, Hair wig in Panchkula, Non surgical hair replacement in chandigarh, women wig dealers in chandigarh, Men wig dealers in chandigarh, Surgical and Non Surgical Hair Replacement in Chandigarh"
        />
        <link rel="canonical" href="https://maneology.com/job-options/" />
      </Helmet>
      <div className="container">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "44px",
              }}
            >
              Job Options
            </h1>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={Job} alt="job" style={{ width: "320px" }} />
            <p>
              Non-surgical hair replacement technicians looking for career
              growth and a comfortable work environment are welcome to contact
              Maneology. Please fill in your details in the application form
              here, and attach a resume. We will get back to you for further
              interviews.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div>
              <form className="Signup-form">
                <h4
                  style={{ textAlign: "center", color: "#ff6900" }}
                  className="py-4"
                >
                  Job Options Application
                </h4>
                <div className="Signup-form-content">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      name="firstname"
                      onChange={getdata}
                      className="form-control mt-1"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      name="lastname"
                      onChange={getdata}
                      className="form-control mt-1"
                      placeholder="Enter last name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      name="email"
                      onChange={getdata}
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="number"
                      name="mobile"
                      onChange={getdata}
                      className="form-control mt-1"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="file"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Message"
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobOptions;
