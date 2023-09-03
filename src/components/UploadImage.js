import React from "react";
import ImageUploading from "react-images-uploading";
import { BiImageAdd } from "react-icons/bi";
import { useState } from "react";

const UploadImage = ({handleEdit ,userDetailsEdit}) => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  console.log("images: ", images[0].file);

  return (
    <>
      <div className="App">
        <ImageUploading
          multiple
          value={userDetailsEdit?.image}
          onChange={(e)=>handleEdit(e)}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,

            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div
              className="upload__image-wrapper"
              style={{ marginRight: "700px" }}
            >
              {images?.length <= 0 ? (
                <BiImageAdd
                  size={50}
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                />
              ) : null}
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button
                      onClick={() => onImageUpdate(index)}
                      style={{
                        width: "70px",
                        height: "40px",
                        border: "1px solid #ff6900",
                        background: "#ff6900",
                        borderRadius: "5px",
                      }}
                    >
                      Change
                    </button>
                    <button
                      onClick={() => onImageRemove(index)}
                      style={{
                        width: "70px",
                        height: "40px",
                        border: "1px solid #ff6900",
                        background: "#ff6900",
                        borderRadius: "5px",
                        marginLeft: "5px",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
};

export default UploadImage;
