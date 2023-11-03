import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BlogsData } from "../../Constants/BlogsData";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../../redux/actions/BlogAction";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  const dispatch = useDispatch();
  //   const [title, setTitle] = useState("");
  //   const titles = () => {
  //     setTitle = "this is tigle";
  //   };
  const { BlogData } = useSelector((state) => state.BlogReducer);
  useEffect(() => {
    dispatch(getAllBlog());
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Blogs | Maneology</title>
        <meta
          name="description"
          content="Discover interesting topics and gain valuable insights with our blogs page Read our expert written articles and stay updated with the latest trends"
        />
      </Helmet>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{ marginTop: "40px", fontWeight: "600", fontSize: "44px" }}
            >
              Blogs
            </h1>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center row p-4">
          {BlogData.map((data, index) => {
            return (
              <>
                <SingleBlog data={data} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
