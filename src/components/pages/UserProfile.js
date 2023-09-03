import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineUser, AiOutlineHeart, AiOutlineWallet } from "react-icons/ai";
import { BsArrowLeftRight, BsCardChecklist } from "react-icons/bs";
import Profile from "./Profile";
import Orders from "./Orders";
import WishlistPage from "./WishlistPage";
import CancelOrder from "../CancelOrder";
import Wallet from "../Wallet";
import Address from "../Address";
import { useDispatch, useSelector } from "react-redux";
import { GetProfileData } from "../../redux/actions/profileAction";

const UserProfile = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState();

  const [isProfile, setIsProfile] = useState(true);
  const [isOrder, setIsOrder] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isWallet, setIsWallet] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [isCancelOrder, setIsCancelOrder] = useState(false);
  const { ProfileData } = useSelector((state) => state.ProfileReducer);

  const handleProfile = (event) => {
    setIsProfile(true);
    setIsWishlist(false);
    setIsOrder(false);
    setIsCancelOrder(false);
    setIsWallet(false);
    setIsAddress(false);
  };
  const handleOrder = (event) => {
    setIsOrder(true);
    setIsProfile(false);
    setIsWishlist(false);
    setIsCancelOrder(false);
    setIsWallet(false);
    setIsAddress(false);
  };
  const handleWishlist = (event) => {
    setIsWishlist(true);
    setIsOrder(false);
    setIsProfile(false);
    setIsCancelOrder(false);
    setIsWallet(false);
    setIsAddress(false);
  };
  const handleWallet = (event) => {
    setIsWallet(true);
    setIsWishlist(false);
    setIsOrder(false);
    setIsProfile(false);
    setIsCancelOrder(false);
    setIsAddress(false);
  };
  const handleAddress = (event) => {
    console.log("Address called");
    setIsAddress(true);
    setIsWallet(false);
    setIsWishlist(false);
    setIsOrder(false);
    setIsProfile(false);
    setIsCancelOrder(false);
  };
  const handleCancelOrder = (event) => {
    setIsCancelOrder(true);
    setIsOrder(false);
    setIsProfile(false);
    setIsWishlist(false);
    setIsWallet(false);
    setIsAddress(false);
  };
  useEffect(() => {
    const temp_data = localStorage.getItem("token");
    const redata = JSON.parse(atob(temp_data.split(".")[1])).userExits;

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
      email: redata?.email,
      mobile: redata?.phone,
      image: ProfileData
        ? ProfileData?.image.length > 0
          ? ProfileData?.image[0]
          : ""
        : "",
    };
    setUserDetails(data);
  }, []);
  useEffect(() => {
    dispatch(GetProfileData());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sx-12 col-md-12 col-lg-3 col-xl-3">
          <div className="row">
            <div className="col-12 col-sx-12 col-md-12 col-lg-12 col-xl-12">
              <div className="userprofile">
                {ProfileData ? (
                  ProfileData?.image.length > 0 ? (
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${ProfileData?.image[0]}`}
                      alt=""
                      style={{ width: "30%" }}
                    />
                  ) : (
                    <img src={""} alt="" style={{ width: "30%" }} />
                  )
                ) : (
                  <img src={""} alt="" style={{ width: "30%" }} />
                )}

                <p className="title">
                  {ProfileData
                    ? ProfileData?.first_name
                      ? ProfileData?.first_name
                      : userDetails?.first_name
                    : userDetails?.first_name}{" "}
                  {ProfileData
                    ? ProfileData?.last_name
                      ? ProfileData?.last_name
                      : userDetails?.last_name
                    : userDetails?.last_name}
                </p>
                <p style={{ paddingBottom: "15px" }}>{userDetails?.email}</p>
              </div>
            </div>
            <div className="col-12 col-sx-12 col-md-12 col-lg-12 col-xl-12">
              <div onClick={handleProfile}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: "#000",
                  }}
                >
                  <AiOutlineUser style={{ fontSize: "25px", color: "#000" }} />{" "}
                  Profile{" "}
                </p>
              </div>
              <div onClick={handleOrder}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <BsCardChecklist style={{ fontSize: "25px" }} /> Orders
                </p>
              </div>
              <div onClick={handleWishlist}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineHeart style={{ fontSize: "25px" }} /> Wishlist
                </p>
              </div>
              <div onClick={handleWallet}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineWallet style={{ fontSize: "25px" }} /> Wallet
                </p>
              </div>
              <div onClick={handleAddress}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineWallet style={{ fontSize: "25px" }} /> Address
                </p>
              </div>
              <div onClick={handleCancelOrder}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <BsArrowLeftRight style={{ fontSize: "25px" }} /> Cancel order
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sx-12 col-md-12 col-lg-9 col-xl-9">
          {isOrder ? <Orders /> : null}
          {isProfile ? <Profile /> : null}
          {isWishlist ? <WishlistPage /> : null}
          {isWallet ? <Wallet /> : null}
          {isAddress ? <Address /> : null}
          {isCancelOrder ? <CancelOrder /> : null}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
