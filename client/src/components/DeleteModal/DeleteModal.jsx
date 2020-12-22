import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

const DeleteModalBody = ({ show, handleClose, id, loadProperties }) => {
  const handleDelete = () => {
    handleClose();
    axios
      .delete(`/api/properties/${id}`)
      .then((res) => {
        loadProperties();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Property</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete this property?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete Property
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModalBody;
