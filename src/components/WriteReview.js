import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";

import Card from "react-bootstrap/Card";

const WriteReview = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [flag, setFlag] = useState(false);
  const [inputData, setInputData] = useState();
  // const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(":::::::::::::::::dadadadad", data);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.feedback || inputData.image) {
      alert("Please Fill All Fields..");
    } else {
      setFlag(true);
    }
  }
  const handleUpload = () => {
    setSelectedFile(...selectedFile);
    console.log("data is coming");
  };
  function handleFileChange(event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }
  useEffect(() => {
    console.log("success");
  }, [flag]);

  return (
    <>
      <div className="modal-dialog" role="document">
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
              <span aria-hidden="true">&times;</span>
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
                      <StarRating />
                    </span>
                    <input
                      type="text"
                      name="name"
                      onChange={handleData}
                      placeholder="Your Name"
                      style={{
                        width: "340px",
                        height: "40px",
                        border: "1px solid #ff6900",
                        borderRadius: "5px",
                      }}
                      className="commentName"
                    />

                    <textarea
                      type="text"
                      name="feedback"
                      onChange={handleData}
                      placeholder="Share your feedback with us"
                      style={{
                        width: "340px",
                        height: "80px",
                        border: "1px solid #ff6900",
                        borderRadius: "5px",
                      }}
                      className="commentArea"
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
                      type="submit"
                      onClick={handleUpload}
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

          <pre>
            {flag ? (
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <Card style={{ width: "18rem" }}>
                        {selectedFile && (
                          <Card.Img variant="top" src={handleUpload.image} />
                        )}
                        <Card.Body>
                          <Card.Title>{inputData.name}</Card.Title>

                          <Card.Text>{inputData.feedback}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </pre>
        </div>
      </div>
    </>
  );
};

export default WriteReview;
