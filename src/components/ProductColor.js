import React, { useState } from "react";
import { colors } from ".././Constants/ColorData";

const ProductColor = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleClick = (colorName) => {
    setSelectedColor(colorName);
  };

  return (
    <div>
      {selectedColor && <p>Color: {selectedColor}</p>}
      {colors.map((color) => (
        <div
          key={color.name}
          onClick={() => handleClick(color.name)}
          style={{
            backgroundColor: color.value,
            margin: "5px",
            cursor: "pointer",
            width: "25px",
            height: "25px",
            display: "inline-block",
            borderRadius: "50%",
            border: "1px solid #000",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ProductColor;
