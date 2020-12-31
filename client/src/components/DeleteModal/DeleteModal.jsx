import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const DeleteModalBody = ({ show, handleClose, id, loadProperties }) => {
  const { jwt } = useContext(AuthContext);

  const handleDelete = () => {
    handleClose();
    axios
      .delete(`/api/properties/${id}/${jwt}`)
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
