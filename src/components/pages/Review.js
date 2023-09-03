import React from "react";

const Review = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center py-2">
          <h3 className="py-3 mx-3" style={{ fontWeight: "600" }}>
            <span style={{ color: "#ff6900" }}>Client's</span> Review
          </h3>
        </div>
      </div>

      <div className="container-fluid review-wrapper">
        <div className="row"></div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center">
            <div className="backtext">
              <p>
                Maneology are innovative and created for people with varied
                needs and lifestyles. Personally for me, this is a one stop
                shop. From using coloured strands, adding volume or length to
                simply framing my face or adding layers, I can now do it all
                without cutting or damaging my actual hair inquiry.
              </p>
            </div>
            {/* <span className="py-2 text-white text-center">
              - By Bradin Hyden
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
