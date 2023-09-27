import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Button, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  padding: 0,
  margin: 0,

  position: "inherit",

  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 260,
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 220,
  },
}));

const MainBannerBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid black",
  "& > div": {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    "& > div": {
      position: "absolute",
      top: "40%",
      width: "50%",
      height: "60%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center",
      // backgroundColor: "rgba(0,0,0,0.2)",
      "&>button": {
        color: "#FF6900",
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
        marginTop: "30px",
        padding: "10px 20px",
        "&:hover": {
          backgroundColor: "#FF6900",
          color: "rgba(255,255,255,0.8)",
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "10px",
          padding: "2px 5px",
        },
      },
    },
  },
}));

const TitleText = styled(Box)(({ theme }) => ({
  color: "#fff",
  fontSize: "42px",
  fontFamily: "'Black Ops One', cursive",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
const DescriptionText = styled(Box)(({ theme }) => ({
  color: "#fff",
  fontSize: "28px",
  fontFamily: "'Inria Sans', sans-seri",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const navigate = useNavigate();
  const { BannerData } = useSelector((state) => state.BannerReducer);

  const handleShopNow = (data) => {
    if (data?.categories.length > 0 && data?.categories[0]?.name) {
      localStorage.removeItem("ATC");
      localStorage.setItem("ATC", data?.categories[0]?.name);
      navigate(`/collection/${data?.categories[0]?.name}`);
    } else {
      navigate(`/`);
    }
  };
  console.log(BannerData);

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {BannerData?.map((data, index) => (
        <MainBannerBox>
          <Image
            src={`${process.env.REACT_APP_BACKEND_URL}/images/${data?.banner_image[0]}`}
            key={data?._id}
            alt={`banner-${data?._id}`}
          />
          <Box>
            <Box>
              <TitleText>{data?.title ? data.title : ""}</TitleText>
              <DescriptionText>
                {data?.description ? data.description : ""}
              </DescriptionText>
              <Button onClick={() => handleShopNow(data)}>Shop now</Button>
            </Box>
          </Box>
        </MainBannerBox>
      ))}
    </Carousel>
  );
};

export default Banner;
