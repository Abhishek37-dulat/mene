import React from "react";
// import PropTypes from "prop-types";

const StepVideo = ({ stepdata }) => {
  console.log(stepdata);
  return (
    <>
      <div className="container">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h3
              style={{
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "36px",
              }}
            >
              Simple Steps you must follow
            </h3>
          </div>
        </div>
        <div className="row">
          {stepdata?.map((data, index) => {
            return (
              <>
                <div
                  className="col-12 col-sx-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 "
                  key={data._id}
                >
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Step {index + 1}:
                  </p>
                  <p>{data?.title}</p>
                  <div className="video-responsive">
                    <iframe
                      width="320"
                      height="240"
                      src={`https://www.youtube.com/embed/${data?.link}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />

                    {/* <iframe width="320" height="240" src={`${data?.link[1]}`} /> */}
                  </div>
                  <p>{data?.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

// StepVideo.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };

export default StepVideo;
