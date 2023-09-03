import { Grid, styled, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;
const Image = styled("img")(({ theme }) => ({
  marginTop: 10,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 120,
  },
}));

// const Grid = styled("img")(({ theme }) => ({
//   width: "100%",
//   display: "flex",
//   justifyContent: "space-between",
//   [theme.breakpoints.down("md")]: {
//     objectFit: "cover",
//   },
// }));

const MidSection = ({ PostData }) => {
  const navigate = useNavigate();
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const [cateData, setCateData] = useState([]);
  const [pCateData, setPCateData] = useState([]);
  const [longBannerData, setLongBannerData] = useState();

  const handleCateChange = (data) => {
    localStorage.removeItem("ATC");
    localStorage.setItem("ATC", data?.product_categories[0]?.name);
    navigate(`/collection/${data?.product_categories[0]?.name}`);
  };
  useEffect(() => {
    const data = ProductData?.map((data) => {
      return data?.product_categories[0].name;
    });
    const newData = [...new Set(data)];
    setCateData(newData);
    const Productbeforedata = newData?.map((item, index) => {
      const temp = ProductData?.find(
        (data) => data.product_categories[0].name === item
      );
      return temp;
    });
    setPCateData(Productbeforedata);
  }, [setCateData, ProductData]);
  useEffect(() => {
    setLongBannerData(PostData.filter((data) => data.categorie === "Poster"));
  }, [setLongBannerData, PostData]);
  console.log("PostData: ", longBannerData);
  // const url =
  //   "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Image
        src={`${process.env.REACT_APP_BACKEND_URL}/images/${
          longBannerData?.length > 0 ? longBannerData[0]?.post_image[0] : ""
        }`}
        alt="post image"
      />

      <h3 style={{ textAlign: "center", fontWeight: 600, marginTop: "30px" }}>
        <span style={{ color: "#ff6900" }}>Our </span>Collection
      </h3>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {pCateData?.map((ele, index) => (
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            key={ele._id}
            onClick={() => handleCateChange(ele)}
          >
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/images/${ele?.product_image[0]}`}
              alt="mid"
              style={{
                width: "90%",
                height: "auto",
                margin: "0 auto",
                cursor: "pointer",
                display: "block",
                marginTop: "20px",
              }}
            />
            <Typography
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  color: "#808080",
                  cursor: "pointer",
                  textDecoration: "none",
                  margin: "0 0 20px 0",
                  marginTop: "20px",
                }}
              >
                {ele?.product_categories[0]?.name}
              </span>
            </Typography>
          </Grid>
        ))}
      </Wrapper>
    </>
  );
};

export default MidSection;
