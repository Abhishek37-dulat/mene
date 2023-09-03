import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";
// import CustomerComments from "./CustomerComments";

const CustomerReview = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const now5 = 100;
  const now4 = 80;
  const now3 = 50;
  const now2 = 20;
  const now1 = 10;

  const [selectedFile, setSelectedFile] = useState(null);
  const data = { name: "", feedback: "", image: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

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

  useEffect(() => {
    console.log("success");
  }, [flag]);

  function handleFileChange(event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }

  const handleUpload = () => {
    setSelectedFile(...selectedFile);
    console.log("data is coming");
  };
  // function handleButtonClick() {
  //   <Popup />;
  // }

  return (
    <>
      <div className="container">
        <div className="row mx-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 py-4 ">
            <div>
              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: 600,
                  marginLeft: "40px",
                  textAlign: "center",
                }}
                className="numberRating"
              >
                5
              </h3>
              <span
                style={{
                  color: "#FDCC0D",
                  fontSize: "25px",
                  textAlign: "center",
                  marginLeft: "90px",
                }}
                className="starRating"
              >
                ★★★★★
              </span>
              <br />
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  marginLeft: "120px",
                }}
                className="reviewRating"
              >
                2 Review
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 py-4 align-items-center justify-content-center">
            <div className="progressRating">
              <div className="row ">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">5 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now5}
                    label={`${now4}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">4 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now4}
                    label={`${now4}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">3 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now3}
                    label={`${now3}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">2 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now2}
                    label={`${now2}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 col-md-3 col-lg-2 col-xl-2">1 Star</div>
                <div className="col-9 col-md-9 col-lg-10 col-xl-10">
                  <ProgressBar
                    now={now1}
                    label={`${now1}%`}
                    visuallyHidden
                    variant="warning"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#exampleModalLong"
              style={{
                border: "1px solid #000",
                width: "130px",
                height: "40px",
                background: "#fff",
              }}
            >
              Write Review
            </button>
            {/* start modal popup here */}

            <div
              className="modal fade"
              id="exampleModalLong"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
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
                            {getdata.map((elem) => {
                              return (
                                <>
                                  {/* <img
                                    src={elem.Img}
                                    alt="girl"
                                    style={{ width: "70px", height: "80px" }}
                                  /> */}
                                  <p
                                    style={{
                                      bottom: "70px",
                                      display: "flex",
                                      position: "relative",
                                      boxSizing: "border-box",
                                      textAlign: "justify",
                                      marginTop: "50px",
                                      fontSize: "18px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {elem.title}
                                  </p>
                                </>
                              );
                            })}

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
                  {/* <CustomerComments inputData={inputData} /> */}
                  {/*start Review saved data */}
                  <pre>
                    {flag ? (
                      <>
                        <div className="container">
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                              <Card style={{ width: "18rem" }}>
                                {selectedFile && (
                                  <Card.Img
                                    variant="top"
                                    src={handleUpload.image}
                                  />
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

                  {/* End review data */}

                  {/* <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary commentBtn"
                    >
                      Submit
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            {/* End modal popoup here */}
            <button
              style={{
                border: "1px solid #000",
                width: "80px",
                height: "40px",
                margin: "10px 10px",
              }}
            >
              Sort by
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
