import React, { useState } from "react";

const PriceRange = ({ CollectionData1 }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "min") {
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

  return (
    <>
      <div>
        <div>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            name="min"
            value={minPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            name="max"
            value={maxPrice}
            onChange={handleFilterChange}
          />
        </div>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PriceRange;
