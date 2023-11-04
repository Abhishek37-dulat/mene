import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

import { Box, Typography, styled, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllProduct,
  getSingleProduct,
} from "../redux/actions/productAction";
import { AddToSaveData, RemoveFromSaveData } from "../redux/actions/SaveAction";
import { DataContext } from "../context/authContext";

const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;

  line-height: 40px;
  text-align: center;
`;

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginTop: "10px",
  top: "15px",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    textAlign: "center",
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    textAlign: "center",
    fontSize: "20px",
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const Image = styled("img")(({ theme }) => ({
  width: "120%",
  objectFit: "cover",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 320,
    width: "120%",
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: "70%",
    width: "120%",
    color: "#ff6900",
  },
}));
const Saaa = styled(Box)(({ theme }) => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "0px 30px",
  [theme.breakpoints.down("sm")]: {
    height: "500px",
    width: "100%",
    margin: "0px 10px",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "100%",
    margin: "0px 10px",
  },
}));
const Cards = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const history = useNavigate();
  const { saveData } = useSelector((state) => state.saveReducers);
  const { accountStatus, setUserDetails, account, userDetails } =
    useContext(DataContext);

  const send = (e) => {
    dispatch(getSingleProduct(e));
    history(`/cart/${e._id}`);
  };

  // const getdata = useSelector((state) => state.cartreducer.display);

  const compare = () => {
    // let comparedata = getdata.filter((e) => {
    //   return e.id == id;
    // });
  };
  const handleCallFav = (id) => {
    console.log("i am called", id);
    if (accountStatus) {
      dispatch(AddToSaveData(id));
    } else {
      history("/login");
    }
  };

  const handleCallFavDelete = (id) => {
    console.log("i am called", id);

    if (accountStatus) {
      dispatch(RemoveFromSaveData(id));
    } else {
      history("/login");
    }
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  console.log("productsData: ", ProductData);

  return (
    <>
      <div className="container-fluid mt-3">
        <h2 className="text-center"> </h2>
        <div className="row d-flex justify-content-center align-items-center">
          <Component>
            <Deal>
              <DealText>
                <h2
                  style={{
                    width: 240,
                    fontWeight: 600,
                  }}
                  className="multiproduct-text"
                >
                  Our Best Products
                </h2>
              </DealText>

              {/* <ViewAllButton
                variant="contained"
                sx={{
                  ":hover": {
                    bgcolor: "#000",
                    color: "white",
                  },
                }}
              >
                View All
              </ViewAllButton> */}
            </Deal>
            <Divider />
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              centerMode={true}
              showDots={false}
              arrows={true}
              dotListClass="custom-dot-list-style"
              itemClass="custom-carousel-item"
              containerClass="custom-carousel-container"
            >
              {ProductData?.map((data, index) => {
                // console.log(data?.product_categories[0]?.subCategories);
                // subCategories
                if (data?.product_categories[0]?.subCategories?.length > 0) {
                } else {
                  const tempdata = saveData?.filter(
                    (item) => item?.product_id === data._id
                  );
                  console.log(tempdata);
                  return (
                    <div className="hover-wishlist" key={index}>
                      <Saaa
                        key={data._id}
                        // className="cardOverlay"
                      >
                        <div className="hide">
                          {tempdata?.length > 0 ? (
                            <AiFillHeart
                              style={{
                                fontSize: "25px",
                                color: "#ff6900",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleCallFavDelete(tempdata[0]?._id)
                              }
                            />
                          ) : (
                            <AiOutlineHeart
                              style={{ fontSize: "25px", cursor: "pointer" }}
                              onClick={() => handleCallFav(data?._id)}
                            />
                          )}
                        </div>

                        <Image
                          src={data.product_image[0].url}
                          alt="product"
                          onClick={() => send(data)}
                          className="cardImage"
                          style={{ cursor: "pointer" }}
                          // style={{
                          //   width: 320,
                          //   justifyContent: "space-between",
                          //   display: "flex",
                          // }}
                        />

                        {/* <div className="overlay">ADD TO CART</div> */}
                        <Text
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#212121",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => send(data)}
                        >
                          {data.product_title}
                        </Text>
                        <Text style={{ color: "#ff6900", textAlign: "center" }}>
                          ₹ {data.product_price} /-
                        </Text>
                        {/* <Text style={{ color: "#212121", opacity: ".6" }}>
                          {data.desc}
                        </Text> */}
                      </Saaa>
                    </div>
                  );
                }
              })}
            </Carousel>
          </Component>
        </div>
      </div>
    </>
  );
};

export default Cards;
