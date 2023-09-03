import React from "react";
import Card from "react-bootstrap/Card";
import blog1 from "../images/h7.JPG";
import blog2 from "../images/hairbelt1.JPG";
import blog3 from "../images/hairbelt2.JPG";
import blog4 from "../images/hairbelt3.JPG";

const SuggestProducts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row gy-3 my-3">
          <div className="col-12 col-sx-12 col-sm-12 col-md-8 col-lg-12">
            <h3 className=" mx-3" style={{ fontWeight: 600 }}>
              You May Like This
            </h3>
            <p className=" mx-3" style={{ fontWeight: 600 }}>
              Explore the world of Hair with Maneology
            </p>
          </div>
        </div>
        <div className="row gy-3 my-3">
          <div className="col-12 col-sx-12  col-sm-12 col-md-6 col-lg-3 ">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>TRICOLOUR OVERSIZED SCRUNCHIE</Card.Title>
                <Card.Text className="text-center" style={{ color: "#FDCC0D" }}>
                  ★★★★★
                </Card.Text>
                <Card.Text className="text-center" style={{ color: "#ff6900" }}>
                  Rs.499.00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sx-12  col-sm-12 col-md-6 col-lg-3">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
                <Card.Title>
                  EVIL EYE MULES HAIR X EVIL EYE Maneology
                </Card.Title>
                <Card.Text className="text-center" style={{ color: "#FDCC0D" }}>
                  ★★★★★
                </Card.Text>
                <Card.Text className="text-center" style={{ color: "#ff6900" }}>
                  Rs.2499.00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sx-12  col-sm-12 col-md-6 col-lg-3">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>ARATA STYLING HAIR CREAM Maneology</Card.Title>
                <Card.Text className="text-center" style={{ color: "#FDCC0D" }}>
                  ★★★★★
                </Card.Text>
                <Card.Text className="text-center" style={{ color: "#ff6900" }}>
                  Rs.599.00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sx-12  col-sm-12 col-md-6 col-lg-3">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog4} />
              <Card.Body>
                <Card.Title>CHUNKY HALF HOOP EARRING GOLD PLATED</Card.Title>
                <Card.Text className="text-center" style={{ color: "#FDCC0D" }}>
                  ★★★★★
                </Card.Text>
                <Card.Text
                  className="text-center"
                  style={{ color: "#ff6900", marginBottom: "5px" }}
                >
                  Rs. 1,199.00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestProducts;
