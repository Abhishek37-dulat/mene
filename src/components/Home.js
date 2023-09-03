import React from "react";
import Cards from "./Cards";
import Banner from "./Banner";
// import Footer from "./Footer";
import MidSection from "./pages/Midsection";
import ScrollBanner1 from "./pages/ScrollBanner1";
import HairTransformation from "./pages/HairTransformation";
import News from "./pages/News";
import ShopByBrand from "./pages/ShopByBrand";
// import Review from "./pages/Review";
import Marquees from "./pages/Marquees";
import WhyManeology from "./pages/WhyManeology";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPost } from "../redux/actions/PostAction";
import ServicesTags from "./ServicesTags";

const Home = () => {
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  return (
    <>
      <div>
        <Banner />
      </div>

      <div className="py-4">
        <ScrollBanner1 />
      </div>
      <div className="py-4">
        <Marquees PostData={PostData} />
      </div>
      <div className="py-4">
        <MidSection PostData={PostData} />
      </div>
      <div>
        <Cards />
      </div>
      <div className="py-4">
        <HairTransformation PostData={PostData} />
      </div>
      <div className="py-4">
        <ShopByBrand />
      </div>
      {/* <div className="py-4">
        <Review />
      </div> */}
      {/* <div className="py-4">
        <News />
      </div> */}
      <div className="py-4">
        <WhyManeology PostData={PostData} />
      </div>
      <div className="container">
        <ServicesTags />
      </div>
    </>
  );
};

export default Home;
