import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSaveData,
  RemoveFromSaveData,
} from "../../redux/actions/SaveAction";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ADD, REMOVE } from "../../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";
import { getSingleProduct } from "../../redux/actions/productAction";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { saveData } = useSelector((state) => state.saveReducers);
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = (data) => {
    let temp_data = ProductData.filter((pre) => pre._id === data.product_id);
    dispatch(getSingleProduct(temp_data[0]));
    navigate(`/cart/${data.product_id}`);
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
                <>
                  <tr>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      <img
                        src={product[0]?.product_image[0]?.url}
                        alt="imagesdfsd"
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
                      {product[0]?.product_title}
                    </td>
                    <td
                      style={{ border: "1px solid #000", textAlign: "center" }}
                    >
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
                      <Button onClick={handleClickOpen}>DELETE</Button>
                    </th>
                  </tr>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Remove Product From WishList"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Are You Sure You Want To Remove IT.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => handleRemoveSave(data?._id)}>
                        Delete
                      </Button>
                      <Button onClick={handleClose} autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default WishlistPage;
