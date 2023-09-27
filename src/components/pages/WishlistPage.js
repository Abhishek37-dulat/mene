import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSaveData,
  RemoveFromSaveData,
} from "../../redux/actions/SaveAction";
import { Button } from "@mui/material";
import { ADD, REMOVE } from "../../redux/actions/cartAction";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { saveData } = useSelector((state) => state.saveReducers);
  const { ProductData } = useSelector((state) => state.ProductReducer);

  const handleAddToCart = (data) => {
    dispatch(ADD(data));
  };
  const handleRemoveSave = (id) => {
    dispatch(RemoveFromSaveData(id));
  };

  useEffect(() => {
    dispatch(GetSaveData());
  }, [dispatch]);

  console.log(saveData);
  return (
    <>
      <div className="container">
        <Table responsive>
          <thead>
            <tr style={{ border: "1px solid #000", textAlign: "center" }}>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Product Image
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Product Name
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Total
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Cart
              </th>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {saveData?.map((data) => {
              const product = ProductData?.filter(
                (item) => item?._id === data?.product_id
              );
              return (
                <tr>
                  <td style={{ border: "1px solid #000", textAlign: "center" }}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${product[0]?.product_image[0]}`}
                      alt="imagesdfsd"
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td style={{ border: "1px solid #000", textAlign: "center" }}>
                    {product[0]?.product_title}
                  </td>
                  <td style={{ border: "1px solid #000", textAlign: "center" }}>
                    {product[0]?.product_price}
                  </td>
                  <td
                    style={{
                      border: "1px solid #000",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Button onClick={() => handleAddToCart(data)}>ADD</Button>
                  </td>
                  <th
                    style={{
                      border: "1px solid #000",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Button onClick={() => handleRemoveSave(data?._id)}>
                      DELETE
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default WishlistPage;
