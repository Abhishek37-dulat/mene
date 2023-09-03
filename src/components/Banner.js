import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled } from "@mui/material";
import { useSelector } from "react-redux";

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
  const { BannerData } = useSelector((state) => state.BannerReducer);

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
        <Image
          src={`${process.env.REACT_APP_BACKEND_URL}/images/${data?.banner_image[0]}`}
          key={data?._id}
          alt={`banner-${data?._id}`}
        />
      ))}
    </Carousel>
  );
};

export default Banner;
