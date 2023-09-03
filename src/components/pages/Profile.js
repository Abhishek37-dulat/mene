import React, { useEffect, useState } from "react";
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

const Profile = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState();
  const [userDetailsEdit, setUserDetailsEdit] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    gender: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [editCondition, setEditCondition] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { ProfileData } = useSelector((state) => state.ProfileReducer);

  function handleEdit() {
    setEditCondition(true);
    setUserDetailsEdit({
      first_name: ProfileData?.first_name ? ProfileData?.first_name : "",
      last_name: ProfileData?.last_name ? ProfileData?.last_name : "",
      dob: ProfileData?.dob ? ProfileData?.dob : "",
      gender: ProfileData?.gender ? ProfileData?.gender : "",
    });
  }

  const handleUpdate = (e) => {
    setUserDetailsEdit({ ...userDetailsEdit, [e.target.name]: e.target.value });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
  };
  const submitFinalData = () => {
    setEditCondition(false);
    if (selectedFile) {
      const data = { ...userDetailsEdit, image: selectedFile };
      dispatch(AddProfileData(data));
    } else {
      const data = { ...userDetailsEdit };
      dispatch(AddProfileData(data));
    }
  };
  useEffect(() => {
    const temp_data = localStorage.getItem("token");
    const redata = JSON.parse(atob(temp_data?.split(".")[1]))?.userExits;
    // console.log("redata", redata, ProfileData[0]);
    const data = {
      first_name: ProfileData
        ? ProfileData?.first_name
          ? ProfileData?.first_name
          : redata?.first_name
        : redata?.first_name,
      last_name: ProfileData
        ? ProfileData?.last_name
          ? ProfileData?.last_name
          : redata?.last_name
        : redata?.last_name,
      email: redata.email,
      mobile: redata.phone,
    };
    setUserDetails(data);
  }, [dispatch, setEditCondition, setUserDetails]);
  useEffect(() => {
    dispatch(GetProfileData());
  }, []);
  console.log("ProfileData: ", userDetails, ProfileData);
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
                    {ProfileData
                      ? ProfileData?.first_name
                        ? ProfileData?.first_name
                        : userDetails?.frist_name
                      : userDetails?.frist_name}{" "}
                    {ProfileData
                      ? ProfileData?.last_name
                        ? ProfileData?.last_name
                        : userDetails?.last_name
                      : userDetails?.last_name}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Gender</td>
                  <td style={{ border: "1px solid #000" }}>
                    {ProfileData
                      ? ProfileData?.gender
                        ? ProfileData?.gender
                        : "- -"
                      : "- -"}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Date Of Birth</td>
                  <td style={{ border: "1px solid #000" }}>
                    {ProfileData
                      ? ProfileData?.dob
                        ? ProfileData?.dob
                        : "- -"
                      : "- -"}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #000" }}>Mobile No.</td>
                  <td style={{ border: "1px solid #000" }}>
                    {userDetails?.mobile}
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
                name="dob"
                value={userDetailsEdit.dob}
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
                      src={imageUrl}
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
