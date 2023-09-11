import React from "react";
// import PropTypes from "prop-types";
import { StepVideoData } from "../Constants/StepVideoData";

const StepVideo = () => {
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
          {StepVideoData.map((data, id) => {
            return (
              <>
                <div className="col-12 col-sm-12 col-lg-4 col-xl-4 " key={id}>
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    {data.step}
                  </p>
                  <p>{data.text}</p>
                  <div className="video-responsive">
                    <iframe
                      width="380"
                      height="280"
                      src={`https://www.youtube.com/embed/${data.embedId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                  <p>{data.desc}</p>
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
