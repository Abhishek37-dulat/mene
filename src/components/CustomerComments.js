import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../redux/actions/CommentAction";
import Rating from "@mui/material/Rating";
import { Box, Button, Typography } from "@mui/material";

const CustomerComments = () => {
  const dispatch = useDispatch();
  const { CommentData } = useSelector((state) => state.CommentReducer);
  const { ProfileData } = useSelector((state) => state.ProfileReducer);
  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);
  console.log(CommentData, ProfileData);
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
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${data?.image[0]}`}
                      alt="Cardimagecap"
                      style={{ width: "100px" }}
                    />
                    <Typography>{data?.comment}</Typography>
                    <Typography style={{ marginTop: "20px" }}>
                      {ProfileData?.first_name} {ProfileData?.last_name}
                    </Typography>
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button>Edit</Button>
                      <Button>Delete</Button>
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
