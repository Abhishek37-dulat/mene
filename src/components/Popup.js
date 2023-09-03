import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Popup = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Button variant="success">Open Modal</Button>
      <Modal show={isShow}>
        <Modal.Header closeButton>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Popup;
