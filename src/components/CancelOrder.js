import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder, getAllOrders } from "../redux/actions/CheckOutAction";
import { Typography } from "@mui/material";

const CancelOrder = () => {
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
  const handlecancelOrder = (id) => {
    dispatch(cancelOrder(id));
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
  console.log(productDetails);
  return (
    <>
      <div className="container py-4">
        <h4 cl>Customer Return/Cancel Order Panel</h4>
        <Table responsive>
          <thead>
            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              Product
            </th>

            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              Date
            </th>
            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              Status
            </th>
          </thead>
          <tbody>
            {OrderData?.map((item, index) => {
              if (item.order_status === "CANCELED")
                return (
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        textAlign: "flex-start",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                    >
                      {item?.items?.map((item, index) => {
                        const product = ProductData?.find(
                          (d) => d?._id === item?.product_id
                        );
                        return (
                          <div>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src={`${process.env.REACT_APP_BACKEND_URL}/images/${product?.product_image[0]}`}
                              alt="imagedfd"
                            />
                            {product?.product_title}
                          </div>
                        );
                      })}
                    </td>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      {String(item.createdAt).substring(0, 10)}
                    </td>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      {item.order_status}
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CancelOrder;
