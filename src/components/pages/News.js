import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-sm-8 col-md-12 col-lg-12 py-2">
            <h3
              className="py-3 mx-3"
              style={{ fontWeight: "600", textAlign: "center" }}
            >
              <span style={{ color: "#ff6900" }}>Latest </span> News
            </h3>
          </div>
        </div>
        <div
          className="row newsBlog"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <Card style={{ width: "18rem", height: "12rem" }} className="mx-3">
              {/* <Card.Img variant="top" src={blog1} /> */}
              <Card.Body>
                <Card.Title style={{ color: "#939393", textAlign: "start" }}>
                  Unusual FAQ's Nish Hair Edition
                </Card.Title>
                <Card.Text>
                  Curious about hair extensions? Uncover the truths
                  behindnpopular myths and get answers to your most eccentric
                  questions in our latest blog post.
                </Card.Text>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <Card style={{ width: "18rem", height: "100px" }} className="mx-3">
              {/* <Card.Img variant="top" src={blog2} /> */}
              <Card.Body>
                <Card.Title style={{ color: "#939393" }}>
                  Why Clip-ins & Halo Hair Extensions
                </Card.Title>
                <Card.Text>
                  Hair extensions have been around for ages, and have become an
                  essential part of the beauty routine for many women,
                  especially
                </Card.Text>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <Card style={{ width: "18rem", height: "100px" }} className="mx-3">
              {/* <Card.Img variant="top" src={blog3} /> */}
              <Card.Body>
                <Card.Title style={{ color: "#939393" }}>
                  What Are Halo Hair Extensions?
                </Card.Title>
                <Card.Text>
                  So many different hair extension types to choose from
                  nowadays. Halo hair extensions are a fairly newer type that
                  has taken the hairextension industry by storm.
                </Card.Text>
                <span className="" style={{ color: "#939393" }}>
                  Read More
                </span>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
