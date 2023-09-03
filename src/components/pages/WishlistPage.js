import React from "react";
import Table from "react-bootstrap/Table";

const WishlistPage = () => {
  return (
    <>
      <div className="container">
        <Table responsive>
          <thead>
            <tr style={{ border: "1px solid #000", textAlign: "center" }}>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Id
              </th>
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
            <tr>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                1
              </td>

              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                Hair Image{" "}
              </td>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                Hair Extension{" "}
              </td>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                Rs. 1779{" "}
              </td>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                Add{" "}
              </td>
              <th style={{ border: "1px solid #000", textAlign: "center" }}>
                Delete
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default WishlistPage;
