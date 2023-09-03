import React, { useState } from "react";
import HairTopper from "./HairTopper";
// import { imageURL } from "../../Constants/Data";
// import { MainCollection } from "../../Constants/MainCollectionData";
// import { useNavigate } from "react-router-dom";

// const uniqueItem = [
//   ...new Set(
//     imageURL.map((curElem) => {
//       return curElem.category;
//     })
//   ),
// ];

const Collection = ({ collection, category }) => {
    // const [collection, setCollection] = useState(imageURL
    // const filteredItems = collection.filter(item => item.category === category);
    // const [myCollection, setMyCollection] = useState(MainCollection)

    // const updatedList = myCollection.filter((collection, myCollection) => {
    //   return collection.category === myCollection.category;
    // });
    // setCollection(updatedList);

  return (
    <>
  {/* {filteredItems.map(item => (
          <HairTopper key={item.id}>{item.name}</HairTopper>
        ))} */}
      <HairTopper />
    </>
  );
};

export default Collection;
