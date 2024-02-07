import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Testdata } from "../Constants/Testdata";

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
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "250px",
  },
  // border: "1px solid black",
  "& > div": {
    position: "absolute",
    width: "80%",
    height: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    borderRadius: "20px",
    padding: "5px 10px",
    [theme.breakpoints.down("md")]: {
      borderRadius: "10px",
    },
  },
}));

const TitleText = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#000",
  fontSize: "24px",
  fontFamily: "'Poppins', sans-serif",

  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
const DescriptionText = styled(Box)(({ theme }) => ({
  color: "#000",
  fontSize: "24px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  [theme.breakpoints.down("md")]: {
    fontSize: "8px",
  },
}));
const TstImage = styled(Box)(({ theme }) => ({
  color: "#ff6900",
  fontSize: "56px",
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
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

const Testimoni = () => {
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
      {Testdata?.map((data, index) => (
        <MainBannerBox>
          <p>{index}</p>

          <Box>
            <TstImage>"</TstImage>
            <TitleText>{data?.description ? data.description : ""}</TitleText>
            <DescriptionText>{data?.view ? data.view : ""}</DescriptionText>
          </Box>
        </MainBannerBox>
      ))}
    </Carousel>
  );
};

export default Testimoni;
