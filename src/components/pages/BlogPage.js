import React, { useEffect } from "react";
import Blog1 from "../../images/blog1.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "../../redux/actions/BlogAction";
import { Box, Typography, styled } from "@mui/material";
import { Helmet } from "react-helmet";

const MainRule = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const LeftRule = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "40%",
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "20px",
    alignItems: "center",
    justifyContent: "center",
  },

  "&>div": {
    border: "none",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
    marginRight: "20px",
    marginTop: "10px",
    color: "#FF6900",
    padding: "15px 10px",
    borderRadius: "5px",
  },
}));

const RightRule = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    width: "95%",
    pading: "10px",
  },
  "&>div": {
    "&>div": {
      "&>img": {
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
    },
  },
}));

const BlogPage = () => {
  const dispatch = useDispatch();
  const { singleBlog } = useSelector((state) => state.BlogReducer);
  let { id } = useParams();
  // function truncateDescription(description, maxLength) {
  //   const cleanedDescription = description.replace(/^<p><br><\/p>/i, "");
  //   if (cleanedDescription && cleanedDescription.length > maxLength) {
  //     return cleanedDescription.substring(0, maxLength) + "...";
  //   }
  //   return cleanedDescription;
  // }
  useEffect(() => {
    let ids = localStorage.getItem(
      "SingleBlogTheerroryoureencounteringsuggeststhatthe__id"
    );
    ids = ids.replace(/^"|"$/g, "");
    console.log(ids);
    if (ids) {
      dispatch(getSingleBlog(ids));
    }
  }, []);
  console.log(singleBlog);
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{singleBlog?.blog_title ?? "Default Title"} | Maneology</title>
        <meta
          name="description"
          content="Discover interesting topics and gain valuable insights with our blogs page Read our expert written articles and stay updated with the latest trends"
        />
        <meta name="keywords" content="hair topper in chandigarh" />
        <link rel="canonical" href={`http://localhost:3001/${id}`} />

        <meta
          property="og:title"
          content="Surgical and Non Surgical Hair Transplant Clinic - Maneology"
        />
        <meta property="og:site_name" content="Meneology" />
        <meta
          property="og:url"
          content="http://localhost:3001/Wigs-Bonding-hair"
        />
        <meta
          property="og:description"
          content="Maneology is the best surgical and non surgical hair transplant clinic in Chandigarh. We deal in Hair fixing weaving, hair bonding, hair wigs, and hair transplant in Chd."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://maneology.com/wp-content/uploads/2022/11/cropped-WhatsApp-Image-2022-11-10-at-12.56.01-PM-1-270x270.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="http://localhost:3001/" />
        <meta
          property="twitter:url"
          content="http://localhost:3001/Wigs-Bonding-hair"
        />
        <meta
          name="twitter:title"
          content="Surgical and Non Surgical Hair Transplant Clinic - Maneology"
        />
        <meta
          name="twitter:description"
          content="Maneology is the best surgical and non surgical hair transplant clinic in Chandigarh. We deal in Hair fixing weaving, hair bonding, hair wigs, and hair transplant in Chd."
        />
        <meta
          name="twitter:image"
          content="https://maneology.com/wp-content/uploads/2022/11/cropped-WhatsApp-Image-2022-11-10-at-12.56.01-PM-1-270x270.jpeg"
        />
      </Helmet>
      <MainRule style={{}}>
        <RightRule>
          <div>
            <div>
              <h3>{singleBlog?.blog_title}</h3>
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
                {singleBlog?.blog_subtitle}
              </Typography>
              <img
                src={singleBlog?.blog_image[0]?.url}
                alt="hair patch "
                style={{ maxHeight: "500px" }}
              />
            </div>
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
                color: "#FF6900",
              }}
            >
              {singleBlog?.blog_categories.length > 0
                ? singleBlog?.blog_categories[0]?.name
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
                __html: singleBlog?.blog_description,
              }}
            />
          </div>
        </RightRule>
        <LeftRule>
          <div>
            <ul>
              <li>What is the Difference Between a Wig and Hair System</li>
              <li>
                Hair Loss Solutions for Alopecia Patients: From Wigs to
                Transplants
              </li>
              <li>Hair Loss No More: The Ultimate Guide to Hair Replacement</li>
              <li>Choosing the Right Hair Toupee: A Comprehensive Guide</li>
            </ul>
          </div>
        </LeftRule>
      </MainRule>
    </>
  );
};

export default BlogPage;
