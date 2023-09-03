import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { CollectionData1 } from "../../Constants/CollectionData1";
import { RangeSlider } from "rsuite";

const AllThingsHair = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [progress, setProgress] = useState(100);
  const [price, setPrice] = useState();

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "max") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const filterProducts = (product) => {
    if (minPrice !== "" && product.price < parseFloat(minPrice)) {
      return false;
    }
    if (maxPrice !== "" && product.price > parseFloat(maxPrice)) {
      return false;
    }
    return true;
  };

  const filteredProducts = CollectionData1.filter(filterProducts);

  const handleProgressChange = (e) => {
    const newProgress = parseInt(e.target.value);
    setProgress(newProgress);
    setMaxPrice(100 + (newProgress - 50) * 2);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-4">
          <h3 style={{ textAlign: "center" }}>All Things Hair</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <span
            style={{ fontSize: "20px", fontWeight: 500, marginLeft: "15px" }}
          >
            Price
          </span>
          <p style={{ marginLeft: "15px" }}>
            The highest price is Rs. 36.000.00
          </p>
          <div>
            <label
              htmlFor="minPrice"
              style={{ marginLeft: "5px", fontWeight: 600, fontSize: "15px" }}
            >
              Min Price:
            </label>
            <input
              type="number"
              id="minPrice"
              name="min"
              value={minPrice}
              onChange={handleFilterChange}
              style={{
                marginLeft: "15px",
                border: "1px solid #ff6900",
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            />
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar">
              <input
                type="range"
                min="500"
                max="3000"
                value={progress}
                onChange={handleProgressChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="maxPrice"
              style={{ marginLeft: "5px", fontWeight: 600, fontSize: "15px" }}
            >
              Max Price:
            </label>
            <input
              type="number"
              id="maxPrice"
              name="max"
              value={price}
              onChange={handleFilterChange}
              style={{
                marginLeft: "12px",
                border: "1px solid #ff6900",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <section className="main-card--container">
            {filteredProducts.map((product) => {
              return (
                <>
                  <div className="card-container">
                    <Card className="card">
                      <div className="card-body">
                        <img
                          src={product.Image}
                          alt="images"
                          className="card-media"
                        />
                        <h4 className="card-title">{product.title}</h4>
                        <span className="card-rating">{product.rating}</span>
                        <div className="card-price">{product.price}</div>
                      </div>
                    </Card>
                  </div>
                  ;
                </>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default AllThingsHair;
