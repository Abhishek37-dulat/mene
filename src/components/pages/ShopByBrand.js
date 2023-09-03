import React from "react";
import Card from "react-bootstrap/Card";

const ShopByBrand = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row gy-3 my-3">
          <div className="col-12 col-sx-12 col-sm-8 col-md-12 col-lg-12">
            <h3
              className="py-3 mx-3"
              style={{ fontWeight: 600, textAlign: "center" }}
            >
              <span style={{ color: "#ff6900" }}>Shop </span> By Brands
            </h3>
          </div>
        </div>
        <div className="row gy-3 mx-2">
          <div className="col-12 col-sx-12  col-sm-8 col-md-6 col-lg-3 col-xl-3 ">
            <Card style={{ width: "18rem" }} className=" brandImage">
              {/* <Card.Img variant="top" src={blog1} /> */}
              <Card.Body>
                <Card.Title>
                  TRICOLOUR OVERSIZED SCRUNCHIE BY DINCKLE
                </Card.Title>
                <Card.Text className="text-center" style={{ color: "#ff6900" }}>
                  Rs.499.00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sx-12  col-sm-8 col-md-6 col-lg-3 col-xl-3 ">
            <Card style={{ width: "18rem" }} className=" brandImage">
              {/* <Card.Img variant="top" src={blog2} /> */}
              <Card.Body>
                <Card.Title>EVIL EYE MULES - HAIR X EVIL EYE</Card.Title>
                <Card.Text className="text-center" style={{ color: "#ff6900" }}>
                  Rs.2499.00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sx-12  col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <Card style={{ width: "18rem" }} className="brandImage">
              {/* <Card.Img variant="top" src={blog3} /> */}
              <Card.Body>
                <Card.Title>ARATA STYLING HAIR CREAM</Card.Title>
                <Card.Text className="text-center" style={{ color: "#ff6900" }}>
                  Rs.599.00
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sx-12  col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
            <Card style={{ width: "18rem" }} className=" brandImage">
              {/* <Card.Img variant="top" src={blog4} /> */}
              <Card.Body>
                <Card.Title>
                  CHUNKY HALF HOOP EARRING 18K GOLD PLATED
                </Card.Title>
                <Card.Text className="text-center" style={{ color: "#ff6900" }}>
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

export default ShopByBrand;
