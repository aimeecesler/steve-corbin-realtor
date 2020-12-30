import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const NewModalBody = ({ show, handleClose, loadProperties }) => {
  const [newProperty, setNewProperty] = useState({
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    description: "",
    status: "",
    yearBuilt: "",
    link: "",
    beds: "",
    baths: "",
    price: "",
    image: "",
  });
  const [uploadedImage, setUploadedImage] = useState({
    file: "",
    url: "https://api.cloudinary.com/v1_1/du9cxdf3n/image/upload",
    api_key: "319232951573166",
    upload_preset: "gbwrh3w8",
    value: "",
  });

  const handleSave = (url) => {
    setNewProperty({ ...newProperty, image: url });
    axios
      .post("/api/properties", { ...newProperty, image: url })
      .then((res) => {
        loadProperties();
        handleClose();
        setNewProperty({
          streetAddress: "",
          streetAddress2: "",
          city: "",
          state: "",
          zipCode: "",
          description: "",
          status: "",
          yearBuilt: "",
          link: "",
          beds: "",
          baths: "",
          price: "",
          image: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("ERROR");
      });
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    if(uploadedImage.file !== "") {
      const formData = new FormData();
      formData.append("file", uploadedImage.file);
      formData.append("upload_preset", uploadedImage.upload_preset);
      try {
        const res = await axios.post(uploadedImage.url, formData);
        setUploadedImage({ ...uploadedImage, file: "", value: "" });
        handleSave(res.data.secure_url);
      } catch (err) {
        console.log(err);
        alert("IMAGE UPLOAD ERROR");
      }
    } else {
      handleSave("");
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Property</Modal.Title>
      </Modal.Header>
      <Form onSubmit={uploadImage}>
        <Modal.Body>
          <Form.Group>
            <Form.File
              id="image"
              label="Upload Cover Image"
              value={uploadedImage.value}
              onChange={(e) =>
                setUploadedImage({
                  ...uploadedImage,
                  file: e.currentTarget.files[0],
                  value: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="streetAddress">
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="11811 Imperial Pines Way"
              value={newProperty.streetAddress}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.streetAddress2}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.city}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.state}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.zipCode}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.description}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.yearBuilt}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.price}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.link}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
                  link: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={newProperty.status}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.beds}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
              value={newProperty.baths}
              onChange={(e) =>
                setNewProperty({
                  ...newProperty,
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
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save New Property
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewModalBody;
