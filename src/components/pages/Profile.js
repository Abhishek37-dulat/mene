import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import UploadImage from "../UploadImage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProfileData,
  GetProfileData,
} from "../../redux/actions/profileAction";
import axios from "axios";
import { DataContext } from "../../context/authContext";

const Profile = () => {
  const {
    accountStatus,
    setUserDetails,
    setAccountStatus,
    account,
    userDetails,
  } = useContext(DataContext);
  const dispatch = useDispatch();
  const [userDetailsEdit, setUserDetailsEdit] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    photo: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [editCondition, setEditCondition] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { ProfileData } = useSelector((state) => state.ProfileReducer);

  function handleEdit() {
    setEditCondition(true);
    setUserDetailsEdit({
      first_name: userDetails?.first_name ? userDetails?.first_name : "",
      last_name: userDetails?.last_name ? userDetails?.last_name : "",
      date_of_birth: userDetails?.date_of_birth
        ? userDetails?.date_of_birth
        : "",
      gender: userDetails?.gender ? userDetails?.gender : "",
    });
  }

  const handleUpdate = (e) => {
    setUserDetailsEdit({ ...userDetailsEdit, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      imageRead(file);
    }
  };
  const imageRead = (img) => {
    console.log(img);
    const reader = new FileReader();
    if (img) {
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        setUserDetailsEdit({ photo: reader.result });
      };
    } else {
      console.log("not found");
    }
  };
  const submitFinalData = async () => {
    setEditCondition(false);
    console.log(userDetailsEdit);
    const fulldata = { ...userDetailsEdit };
    try {
      const token = localStorage.getItem("maneologytokenSecurity");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log(fulldata);
      const data = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/user/details/update`,
        fulldata,
        {
          headers,
        }
      );
      console.log(data);
      localStorage.setItem("userdata", JSON.stringify(data.data.data));
      setUserDetails(data.data.data);
    } catch (error) {
      console.log(error.message);
    }

    // dispatch(AddProfileData(fulldata));
  };
  const dataUpdateFun = async (data) => {
    if (data) {
      const regular = JSON.parse(data);
      console.log(regular);
      setUserDetails(regular);
    }
  };
  useEffect(() => {
    const temp_data = localStorage.getItem("userdata");
    dataUpdateFun(temp_data);
  }, []);
  useEffect(() => {
    dispatch(GetProfileData());
  }, [setEditCondition]);
  console.log("ProfileData: ", userDetails, ProfileData, userDetailsEdit);
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-sx-12 col-md-12 col-lg-9 col-xl-9">
            <h3>Profile</h3>

            <Table style={{ border: "1px solid #000" }}>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Name</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.first_name} {userDetails?.last_name}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Gender</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.gender ? userDetails?.gender : "- -"}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Date Of Birth</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.date_of_birth
                      ? userDetails?.date_of_birth
                      : "- -"}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Mobile No.</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.phone}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Email</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.email}
                  </td>
                </tr>
              </tbody>
            </Table>
            <div>
              <Button
                variant="dark"
                style={{ width: "90px", height: "45px" }}
                className="userprofile_button"
                onClick={handleEdit}
                // Profile={Profile}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
        {editCondition ? (
          <div className="row mx-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 checkout-contact">
              <h5>Profile</h5>
              <input
                type="text"
                placeholder="Your First Name"
                name="first_name"
                value={userDetailsEdit.first_name}
                onChange={(e) => handleUpdate(e)}
              />
              <input
                type="text"
                placeholder="Your Last Name"
                name="last_name"
                value={userDetailsEdit.last_name}
                onChange={(e) => handleUpdate(e)}
              />
              <input
                type="date"
                placeholder="Select DOB"
                name="date_of_birth"
                value={userDetailsEdit.date_of_birth}
                onChange={(e) => handleUpdate(e)}
              />
              <Form.Select
                name="gender"
                value={userDetailsEdit.gender}
                onChange={(e) => handleUpdate(e)}
              >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <br />
              <br />
              <p>Upload Image</p>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <div>
                    <p>Selected Image:</p>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={userDetailsEdit.photo}
                      alt="User-Provided"
                    />
                  </div>
                )}
              </div>

              <Button
                variant="dark"
                style={{ width: "90px", height: "45px" }}
                className="userprofile_button"
                onClick={submitFinalData}
              >
                Update
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
