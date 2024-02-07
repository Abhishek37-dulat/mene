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
import men from "../images/hair_loss_in_men-removebg-preview.png";
import women from "../images/iStock-1221628227-removebg-preview.png";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Testimoni from "./Testimoni";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [popupDataMale, setPopupDataMale] = useState([]);
  const [popupDataFemale, setPopupDataFemale] = useState([]);

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  useEffect(() => {
    setPopupDataMale(
      PostData.filter((data) => data.categorie === "Male image")
    );
    setPopupDataFemale(
      PostData.filter((data) => data.categorie === "Female image")
    );
  }, [setPopupDataMale, setPopupDataFemale, PostData]);
  console.log("popupData: ", popupDataMale, popupDataFemale);

  return (
    <>
      <div className="container-fluid">
        {isPopupOpen && (
          <div className="popup" style={{ zIndex: "2000" }}>
            <div className="popup-content">
              <div className="d-flex justify-content-end">
                <AiOutlineClose className="closebutton" onClick={closePopup} />
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
                  <h4
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                    }}
                  >
                    Select your Gender
                  </h4>
                </div>
              </div>

              <div className="row py-4">
                <div
                  className="col-12 col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-2 main-male"
                  // style={{
                  //   width: "50%",
                  //   height: "400px",
                  // }}
                >
                  <div
                    className="malediv"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={popupDataMale[0]?.post_image[0]?.url}
                      alt="men"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <button
                      className="malebtn"
                      onClick={() => navigate("/gendercollection/male")}
                    >
                      Male
                    </button>
                  </div>
                </div>

                <div
                  className="col-12 col-sx-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-2 main-female"
                  // style={{
                  //   width: "50%",
                  //   height: "400px",
                  // }}
                >
                  <div
                    className="femalediv"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      src={popupDataFemale[0]?.post_image[0]?.url}
                      alt="women"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <button
                      className="femalebtn"
                      onClick={() => navigate("/gendercollection/female")}
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
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
        <Testimoni />
      </div>
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
