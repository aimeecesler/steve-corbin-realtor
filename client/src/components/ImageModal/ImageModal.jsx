import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const ImageModal = ({ show, handleClose, property, loadProperties }) => {
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
  const [uploadedImage, setUploadedImage] = useState({
    file: "",
    url: "https://api.cloudinary.com/v1_1/du9cxdf3n/image/upload",
    api_key: "319232951573166",
    upload_preset: "gbwrh3w8",
    value: "",
  });

  const uploadImage = async (e) => {
    e.preventDefault();
    handleClose();
    const formData = new FormData();
    formData.append("file", uploadedImage.file);
    formData.append("upload_preset", uploadedImage.upload_preset);
    try {
      const res = await axios.post(uploadedImage.url, formData);
      console.log(res.data.secure_url);
      setUpdatedProperty({ ...updatedProperty, image: res.data.secure_url });
      setUploadedImage({...uploadedImage, file: "", value: ""});
      axios
      .put(`/api/properties/${property._id}`, {updatedProperty: {...property, image: res.data.secure_url}, auth: jwt})
      .then((res) => {
        loadProperties();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("ERROR");
      });
    } catch(err) {
        console.log(err);
        alert("IMAGE UPLOAD ERROR");
      };
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Image</Modal.Title>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save New Image
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ImageModal;
