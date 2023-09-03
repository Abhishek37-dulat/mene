import React from "react";
import { useState } from "react";

const SavedReview = () => {
  const [data, setData] = useState("");

  const handleSave = (inputData) => {
    setData(inputData);
  };
  return (
    <>
      <div>
        {/* <ChildComponents onSave={handleSave} /> */}
        <p>Name: {data}</p>
        <p>Feedback :</p>
      </div>
    </>
  );
};

export default SavedReview;
