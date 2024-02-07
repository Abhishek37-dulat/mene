import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../redux/actions/CommentAction";
import Rating from "@mui/material/Rating";
import { Box, Button, Typography } from "@mui/material";

const CustomerComments = ({ productID }) => {
  const dispatch = useDispatch();
  const { CommentData } = useSelector((state) => state.CommentReducer);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    dispatch(getAllComments(productID));
  }, []);
  console.log(CommentData);
  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {CommentData?.length > 0
            ? CommentData?.map((data) => {
                return (
                  <div
                    style={{
                      width: "84%",
                      borderBottom: "#A4A8AB",
                      backgroundColor: "#A4A8AB",
                      marginTop: "10px",
                      padding: "5px 20px",
                      marginLeft: "-30px",
                    }}
                    key={data?._id}
                  >
                    <Rating name="read-only" value={data?.rating} readOnly />
                    <Typography>{data?.title}</Typography>
                    <img
                      className="card-img-top"
                      src={data?.image}
                      alt="Cardimagecap"
                      style={{ width: "100px" }}
                    />
                    <Typography>{data?.comment}</Typography>

                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      {/* <Button>Edit</Button>
                      <Button>Delete</Button> */}
                    </Box>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default CustomerComments;
