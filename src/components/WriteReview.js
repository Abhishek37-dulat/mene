import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";

import Card from "react-bootstrap/Card";
import { placeNewComment } from "../redux/actions/CommentAction";

const WriteReview = ({ productID, showReview, setShowReview }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [flag, setFlag] = useState(false);
  const [inputData, setInputData] = useState({
    title: "",
    comment: "",
    productID: productID,
  });
  const [commentImage, setCommentImage] = useState(null);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.title || !inputData.comment || commentImage === null) {
      alert("Please Fill All Fields..");
    } else {
      let data = {
        title: inputData?.title,
        comment: inputData?.comment,
        rating: rating,
        image: commentImage,
        productID: productID,
      };
      dispatch(placeNewComment(data));
      setShowReview(false);
    }
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    setCommentImage(file);
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }
  useEffect(() => {
    console.log("success");
  }, [showReview]);

  return (
    <>
      <div
        className={`modal-dialog ${showReview ? "show" : ""}`}
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Share Your Review
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden={showReview}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="comments">
              <form onSubmit={handleSubmit}>
                <div className="container formContainer">
                  <div className="input-group">
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                        color: "#FDCC0D",
                        bottom: "50px",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <StarRating rating={rating} setRating={setRating} />
                    </span>
                    <input
                      type="text"
                      name="title"
                      onChange={handleData}
                      placeholder="Your Name"
                      style={{
                        width: "340px",
                        height: "40px",
                        border: "1px solid #ff6900",
                        borderRadius: "5px",
                      }}
                      className="commentName"
                      value={inputData.title}
                    />

                    <textarea
                      type="text"
                      name="comment"
                      onChange={handleData}
                      placeholder="Share your feedback with us"
                      style={{
                        width: "340px",
                        height: "80px",
                        border: "1px solid #ff6900",
                        borderRadius: "5px",
                      }}
                      className="commentArea"
                      value={inputData.comment}
                    />

                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleFileChange}
                        className="fileupload"
                      />
                      <AiOutlinePlus />
                    </div>
                    <p>
                      <img id="output" width="100" alt="fetchImages" />
                    </p>
                    {/* <button onClick={handleUpload}>Upload</button> */}
                    <button
                      data-dismiss="modal"
                      type="submit"
                      onClick={handleSubmit}
                      style={{
                        width: "80px",
                        height: "40px",
                        border: "1px solid #ff6900",
                        borderRadius: "25px",
                        background: "#ff6900",
                        color: "#fff",
                      }}
                      className="commentBtn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteReview;
