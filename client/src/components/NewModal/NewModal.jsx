import React from "react";
import Modal from "react-bootstrap/Modal";
import NewPropertyForm from "../NewPropertyForm/NewPropertyForm";

const NewModalBody = ({ show, handleClose, loadProperties }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Property</Modal.Title>
      </Modal.Header>
      <NewPropertyForm show={show} handleClose={handleClose} loadProperties={loadProperties} />
    </Modal>
  );
};

export default NewModalBody;
