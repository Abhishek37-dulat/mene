import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Marquees = ({ PostData }) => {
  const [marqueeData, setMarqueeData] = useState();
  useEffect(() => {
    setMarqueeData(PostData?.filter((data) => data?.categorie === "Marquee"));
  }, [setMarqueeData, PostData]);
  console.log(marqueeData);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className=" fullmarquee col-12 col-md-12 col-lg-12 col-xl-12 py-4">
            <Marquee>
              {marqueeData?.map((data, index) => {
                if (index % 2 === 0) {
                  return (
                    <h1 className="marq1">
                      {data?.title}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h1>
                  );
                } else {
                  return (
                    <h1 className="marq">
                      {data?.title}
                      .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h1>
                  );
                }
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquees;
