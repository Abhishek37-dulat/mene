import React from "react";
import Table from "react-bootstrap/Table";

const CancelOrder = () => {
  return (
    <>
      <div className="container py-4">
        <h4 cl>Customer Return/Cancel Order Panel</h4>
        <Table responsive>
          <thead>
            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              RMA Id
            </th>
            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              Order Ref
            </th>
            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              Status
            </th>
            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              Date
            </th>

            <th style={{ border: "1px solid #000", textAlign: "center" }}>
              Action
            </th>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                45241586
              </td>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                Hair Topper
              </td>

              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                Processing
              </td>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                13-08-2023
              </td>
              <td style={{ border: "1px solid #000", textAlign: "center" }}>
                Cencel
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CancelOrder;
