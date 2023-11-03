import React, { useEffect, useState } from "react";
import { imageURL } from "../../Constants/Data";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GenderCollection = () => {
  const navigate = useNavigate();
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const [mainData, setMainData] = useState([]);
  const [cateData, setCateData] = useState([]);
  const [collectionType, setCollectionType] = useState("");
  const handleCollectionData = (data) => {
    localStorage.removeItem("ATC");
    localStorage.setItem("ATC", data);
    navigate(`/collection/${data}`);
  };

  useEffect(() => {
    let data = window.location.href;
    if (data.includes("female")) {
      setMainData(
        ProductData.filter((data) => data?.product_gender === "Female")
      );
      const tempdata = mainData?.map((item) => {
        return item?.product_categories[0]?.name;
      });
      const unique = [...new Set(tempdata)];
      setCateData(unique);
      setCollectionType("Female");
    } else if (data.includes("male") && !data.includes("female")) {
      setMainData(
        ProductData.filter((data) => data?.product_gender === "Male")
      );
      const tempdata = mainData?.map((item) => {
        return item?.product_categories[0]?.name;
      });
      const unique = [...new Set(tempdata)];
      setCateData(unique);
      setCollectionType("Male");
    }
  }, [setMainData, ProductData, cateData]);
  console.log(mainData, cateData);

  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{
                marginTop: "40px",
                fontWeight: "600",
                fontSize: "44px",
              }}
            >
              {collectionType} Collection
            </h1>
          </div>
        </div>
        <div className="row py-4">
          {cateData?.map((data, id) => {
            const product = mainData?.filter(
              (item) => item?.product_categories[0]?.name === data
            );

            return (
              <>
                <div
                  className="col-12 col-sm-12 col-lg-3 col-xl-3"
                  key={id}
                  onClick={() => handleCollectionData(data)}
                >
                  <img
                    src={product[0]?.product_image[0]?.url}
                    alt="md"
                    style={{
                      width: "90%",
                      height: "auto",
                      margin: "0 auto",
                      cursor: "pointer",
                      display: "block",
                      marginTop: "20px",
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "#ff6900",
                    }}
                  >
                    {data}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GenderCollection;
