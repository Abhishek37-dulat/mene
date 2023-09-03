import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CardsDetails from "./components/CardsDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Collection from "./components/pages/Collection";
import WishlistPage from "./components/pages/WishlistPage";
import CartPage from "./components/pages/CartPage";
import Checkout from "./components/pages/Checkout";
import AboutUs from "./components/pages/AboutUs";
import HelpMe from "./components/pages/HelpMe";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ReturnAndExchangePolicy from "./components/pages/ReturnAndExchangePolicy";
import ShippingPolicy from "./components/pages/ShippingPolicy";
import TermsOfServices from "./components/pages/TermsOfServices";
import ContactUs from "./components/pages/ContactUs";
import ScrollTop from "./components/ScrollTop";
import Empty from "./components/pages/Empty";
import ThankYou from "./components/pages/ThankYou";
import FAQ from "./components/pages/FAQ";
import Profile from "./components/pages/Profile";
import UserProfileForm from "./components/UserProfileForm";
import UserProfile from "./components/pages/UserProfile";
import Orders from "./components/pages/Orders";
import SuccessfullyReg from "./components/SuccessfullyReg";
import { useContext } from "react";
import { DataContext } from "./context/authContext";
import { getAllProduct } from "./redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { GetCartData } from "./redux/actions/cartAction";
import WhyManeologyCompany from "./components/pages/WhyManeologyCompany";
import BeforeAfter from "./components/pages/BeforeAfter";
import { GetProfileData } from "./redux/actions/profileAction";
import PaymentVerify from "./components/pages/PaymentVerify";
import PaymentSuccess from "./components/pages/PaymentSuccess";
import PaymentFailed from "./components/pages/PaymentFailed";
import { getAllBanner } from "./redux/actions/BannerAction";
import { getAllPost } from "./redux/actions/PostAction";
// import { useDispatch, useSelector } from "react-redux";

// import { getAllProduct } from "./redux/actions/productAction";

function App() {
  const dispatch = useDispatch();
  const { accountStatus, setUserDetails, account, userDetails } =
    useContext(DataContext);

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(GetProfileData());
  }, [dispatch]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const trydata = JSON.parse(atob(token.split(".")[1]));
      if (trydata.decode) {
        setUserDetails(trydata.decode.userExits);
      } else {
        console.log("userDetails: ==>", trydata);
        setUserDetails(trydata.userExits);
        localStorage.setItem("userdata", JSON.stringify(trydata.userExits));
      }
    }
  }, []);
  useEffect(() => {
    dispatch(getAllBanner());
    dispatch(getAllPost());
  }, [dispatch]);

  return (
    <>
      <ScrollTop />
      {accountStatus && <Header />}
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart-empty" element={<Empty />} />
        <Route path="/collection/:id" element={<Collection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/help-me" element={<HelpMe />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/why-maneology" element={<WhyManeologyCompany />} />
        <Route path="/before-and-after" element={<BeforeAfter />} />
        <Route
          path="/return-and-exchange-policy"
          element={<ReturnAndExchangePolicy />}
        />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route
          path="/customer/signup-successfully"
          element={<SuccessfullyReg />}
        />
        <Route path="/faqs" element={<FAQ />} />
        <Route
          path="/customer/account/user-profile"
          element={<UserProfile />}
        />
        <Route path="/customer/account/profile" element={<Profile />} />
        <Route
          path="/customer/account/profile/edit"
          element={<UserProfileForm />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
