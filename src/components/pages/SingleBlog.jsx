import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import StartIcon from "@mui/icons-material/Start";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { useNavigate, useParams } from "react-router-dom";

const BlogCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "15px",
  width: "300px",
  height: "450px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.4)",
  borderRadius: "10px",
  margin: "10px",
}));

const BlogTitleBox = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  textTransform: "capitalize",
  fontWeight: "600",
  cursor: "pointer",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  ":hover": {
    color: "#FF6900",
  },
}));

const SingleBlog = ({ data }) => {
  const navigate = useNavigate();
  const handleBlogEdit = () => {
    localStorage.setItem(
      "SingleBlogTheerroryoureencounteringsuggeststhatthe__id",
      JSON.stringify(data._id)
    );
    navigate(`/${data?.urltitle}`);
  };

  function truncateDescription(description, maxLength) {
    const cleanedDescription = description.replace(/^<p><br><\/p>/i, "");
    if (cleanedDescription && cleanedDescription.length > maxLength) {
      return cleanedDescription.substring(0, maxLength) + "...";
    }
    return cleanedDescription;
  }
  return (
    <BlogCard>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "40%",
          overflow: "hidden",
        }}
      >
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src={`${process.env.REACT_APP_BACKEND_URL}/images/${
            data?.blog_image ? data?.blog_image[0] : ""
          }`}
          alt="Art1"
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: "50%",
          overflow: "hidden",
          marginTop: "10px",
        }}
      >
        <BlogTitleBox onClick={() => handleBlogEdit()}>
          {data?.blog_title}
        </BlogTitleBox>
        <Typography
          style={{
            fontSize: "14px",
            textTransform: "capitalize",
            fontWeight: "400",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {data?.blog_subtitle}
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            textTransform: "capitalize",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "500",
            margin: "10px 0px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {data?.blog_categories.length > 0
            ? data?.blog_categories[0]?.name
            : ""}
        </Typography>

        <div
          style={{
            fontSize: "16px",
            textTransform: "capitalize",
            fontWeight: "400",
            fontFamily: "'Outfit', sans-serif",
          }}
          dangerouslySetInnerHTML={{
            __html: truncateDescription(data?.blog_description, 150),
          }}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
          height: "10%",
        }}
      >
        <Button
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            color: "#FF6900",
          }}
          onClick={() => handleBlogEdit()}
        >
          <Typography>Read more </Typography>{" "}
          <Typography>
            <StartIcon style={{ marginTop: "-2px", marginLeft: "2px" }} />
          </Typography>
        </Button>
      </Box>
    </BlogCard>
  );
};

export default SingleBlog;
