import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const UserProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 checkout-contact">
            <h5>Profile</h5>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Select>
              <option>Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </Form.Select>
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button>Upload images</button>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileForm;
