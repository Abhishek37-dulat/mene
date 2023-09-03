import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../../redux/actions/CheckOutAction";

const Orders = () => {
  const dispatch = useDispatch();
  const { OrderData } = useSelector((state) => state.CheckOutReducer);
  const [productDetails, setProductDetails] = useState([]);
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const [toggleOrderList, setToggleOrderList] = useState(false);

  const dlt = (id) => {
    console.log(id);
    // dispatch(DLT(id));
    // history("/");
  };
  const handleShowList = (e) => {
    setToggleOrderList(!toggleOrderList);
  };

  useEffect(() => {
    const updatedProductDetails = [];

    OrderData?.forEach((data) => {
      data?.items?.forEach((item) => {
        const product = ProductData?.find((d) => d?._id === item?.product_id);

        if (product) {
          updatedProductDetails.push(product);
        }
      });
    });
    setProductDetails(updatedProductDetails);
  }, [OrderData, ProductData]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  console.log(OrderData);

  console.log("productDetails: ", productDetails);
  return (
    <>
      <div className="container-fluid py-2">
        <Table responsive>
          <thead>
            <tr
              style={{
                backgroundColor: "#FF6900",
                color: "#fff",
                padding: "0px 5px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                border: "5px solid rgba(0,0,0,0.2)",
              }}
            >
              <th style={{ textAlign: "center" }}>Order Id</th>
              <th style={{ textAlign: "center" }}>Product Name</th>
              <th style={{ textAlign: "center" }}>Total</th>
              <th style={{ textAlign: "center" }}>Order Date</th>
              <th style={{ textAlign: "center" }}>Status</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {OrderData?.map((item, index) => {
              return (
                <>
                  <tr
                    key={item._id}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                      border: "5px solid rgba(0,0,0,0.2)",
                    }}
                    onClick={(e) => handleShowList(e)}
                  >
                    <td style={{ textAlign: "center", padding: "20px 10px" }}>
                      {item?.order_id}
                    </td>
                    <td style={{ textAlign: "center", padding: "20px 0px" }}>
                      {item?.items
                        ?.map((item) => {
                          const product = ProductData?.find(
                            (d) => d?._id === item?.product_id
                          );
                          return product?.product_title;
                        })
                        .join("  ,   ")}
                    </td>
                    <td style={{ textAlign: "center", padding: "20px 0px" }}>
                      {item?.total_amount}
                    </td>
                    <td style={{ textAlign: "center", padding: "20px 0px" }}>
                      {item?.createdAt.substring(0, 10)}
                    </td>
                    <td style={{ textAlign: "center", padding: "20px 0px" }}>
                      {item?.ShipStatus}
                    </td>
                    <td
                      style={{ textAlign: "center", padding: "20px 0px" }}
                      onClick={() => dlt(item?.order_id)}
                    >
                      <button
                        style={{
                          outline: "none",
                          border: "none",
                          borderRadius: "5px",
                          backgroundColor: "red",
                          color: "#fff",
                        }}
                      >
                        Cencel
                      </button>
                    </td>
                  </tr>
                  {toggleOrderList ? <tr>Helooo</tr> : null}
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Orders;
