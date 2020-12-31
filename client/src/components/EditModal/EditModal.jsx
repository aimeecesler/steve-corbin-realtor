import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const EditModal = ({ show, handleClose, property, loadProperties }) => {

  const { jwt } = useContext(AuthContext);

  const [updatedProperty, setUpdatedProperty] = useState({
    streetAddress: property.streetAddress,
    streetAddress2: property.streetAddress2,
    city: property.city,
    state: property.state,
    zipCode: property.zipCode,
    description: property.description,
    status: property.status,
    yearBuilt: property.yearBuilt,
    link: property.link,
    beds: property.beds,
    baths: property.baths,
    image: property.image,
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    handleClose();
    axios
      .put(`/api/properties/${property._id}`, {updatedProperty, auth: jwt})
      .then((res) => {
        loadProperties();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(" UPDATE ERROR");
      });
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Property</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleUpdate}>
        <Modal.Body>
          <Form.Group controlId="streetAddress">
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="11811 Imperial Pines Way"
              value={updatedProperty.streetAddress}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  streetAddress: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="streetAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Unit 239"
              value={updatedProperty.streetAddress2}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  streetAddress2: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bonita Springs"
              value={updatedProperty.city}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  city: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="FL"
              value={updatedProperty.state}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  state: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="zipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="34135"
              value={updatedProperty.zipCode}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  zipCode: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Property Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={updatedProperty.description}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  description: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="yearBuilt">
            <Form.Label>Year Built</Form.Label>
            <Form.Control
              type="text"
              placeholder="1990"
              value={updatedProperty.yearBuilt}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  yearBuilt: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="$199,999"
              value={updatedProperty.price}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  price: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="link">
            <Form.Label>Property Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://www.mls.com"
              value={updatedProperty.link}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  link: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={updatedProperty.status}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  status: e.currentTarget.value,
                })
              }
            >
              <option value="" className="disabled"></option>
              <option value="For Sale">For Sale</option>
              <option value="Pending">Pending</option>
              <option value="Under Contract">Under Contract</option>
              <option value="Sold">Sold</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="beds">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control
              as="select"
              value={updatedProperty.beds}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  beds: e.currentTarget.value,
                })
              }
            >
              <option value="" className="disabled"></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10+">10+</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="baths">
            <Form.Label>Bathrooms</Form.Label>
            <Form.Control
              as="select"
              value={updatedProperty.baths}
              onChange={(e) =>
                setUpdatedProperty({
                  ...updatedProperty,
                  baths: e.currentTarget.value,
                })
              }
            >
              <option value="" className="disabled"></option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
              <option value="5.5">5.5</option>
              <option value="6">6</option>
              <option value="6.5">6.5</option>
              <option value="7">7</option>
              <option value="7.5">7.5</option>
              <option value="8">8</option>
              <option value="8.5">8.5</option>
              <option value="9">9</option>
              <option value="9.5">9.5</option>
              <option value="10+">10+</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
              <option value="5.5">5.5</option>
              <option value="6">6</option>
              <option value="6.5">6.5</option>
              <option value="7">7</option>
              <option value="7.5">7.5</option>
              <option value="8">8</option>
              <option value="8.5">8.5</option>
              <option value="9">9</option>
              <option value="9.5">9.5</option>
              <option value="10+">10+</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update Property
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditModal;
