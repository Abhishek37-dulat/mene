import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopByBrand = () => {
  const navigate = useNavigate();
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const [productBrand, setProductBrand] = useState([]);

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
          {ProductData?.map((data, index) => {
            if (index < 4) {
              return (
                <div
                  className="col-12 col-sx-12  col-sm-8 col-md-6 col-lg-3 col-xl-3 "
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/cart/${data?._id}`)}
                >
                  <Card style={{ width: "18rem" }} className=" brandImage">
                    <Card.Img variant="top" src={data?.product_image[0]?.url} />
                    <Card.Body>
                      <Card.Title>{data?.product_title}</Card.Title>
                      <Card.Text
                        className="text-center"
                        style={{ color: "#ff6900" }}
                      >
                        Rs {data?.product_price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ShopByBrand;
