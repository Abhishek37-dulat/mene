import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { DataContext } from "../context/authContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteUserAddress,
  getUserAddress,
  updateUserAddress,
} from "../redux/actions/AddressAction";

const Address = () => {
  const dispatch = useDispatch();
  const [addressDetails, setAddressDetails] = useState({
    address: "",
    city: "",
    state: "",
    pin_code: "",
  });
  const { userDetails } = useContext(DataContext);
  const { UserAddress } = useSelector((state) => state.AddressReducer);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editData, setEditData] = useState();

  const handleEdit = (data) => {
    setEditData(data);
    setAddressDetails({
      address: data.address,
      city: data.city,
      state: data.state,
      pin_code: data.pin_code,
    });
    setToggleEdit(true);
  };

  const handleChangeAddress = (e) => {
    setAddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
  };

  const handleSave = (id) => {
    dispatch(updateUserAddress(id, addressDetails));
    setToggleEdit(false);
  };

  const handleDeleteFun = (data) => {
    dispatch(deleteUserAddress(data?._id));
  };

  useEffect(() => {
    dispatch(getUserAddress());
  }, [dispatch]);

  console.log("UserAddress: ", UserAddress);
  return (
    <>
      <div className="container py-4">
        <h2>Address</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {UserAddress?.map((data) => {
            return (
              // <div className="row">
              //   <div className="col-12 col-sm-12 col-lg-4 col-xl-4 mx-2">
              <Card style={{ width: "18rem", margin: "4px" }} key={data._id}>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    {userDetails?.first_name + " " + userDetails?.last_name}
                  </Card.Subtitle>
                  <Card.Text>
                    {data.address}
                    <br />
                    {data.city},{data.state},{data.pin_code}
                  </Card.Text>
                  <Card.Link
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#ff6900",
                      fontWeight: 600,
                    }}
                    onClick={() => handleEdit(data)}
                  >
                    Edit
                  </Card.Link>
                  <Card.Link
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#ff6900",
                      fontWeight: 600,
                    }}
                    onClick={() => handleDeleteFun(data)}
                  >
                    Delete
                  </Card.Link>
                </Card.Body>
              </Card>
              //   </div>
              // </div>
            );
          })}
        </div>
        {toggleEdit && (
          <>
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4>Change Address</h4>
              </div>
            </div>
            <div className="row checkout-contact">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <b>Full Name: </b>
                {userDetails?.first_name + " " + userDetails?.last_name}
              </div>
            </div>
            <div className="row checkout-contact">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <input
                  type="text"
                  value={addressDetails?.address}
                  name="address"
                  onChange={(e) => handleChangeAddress(e)}
                  placeholder="Apartment, suit, etc."
                />
              </div>
            </div>
            <div className="row checkout-contact">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <input
                  type="text"
                  value={addressDetails?.city}
                  name="city"
                  onChange={(e) => handleChangeAddress(e)}
                  placeholder="City "
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <input
                  type="text"
                  value={addressDetails?.pin_code}
                  name="pin_code"
                  onChange={(e) => handleChangeAddress(e)}
                  placeholder="Pin Code "
                />
              </div>
            </div>
            <div className="row checkout-contact">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <input
                  type="text"
                  value={addressDetails?.state}
                  name="state"
                  onChange={(e) => handleChangeAddress(e)}
                  placeholder="State "
                />
              </div>
            </div>
            <div className="row">
              <div>
                <button
                  style={{
                    color: "#ff6900",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                    border: "1px solid #ff6900",
                    borderRadius: "25px",
                    background: "#ff6900",
                    color: "#fff",
                    width: "150px",
                    height: "50px",
                    marginTop: "10px",
                  }}
                  onClick={() => handleSave(editData._id)}
                >
                  Save Address
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Address;
