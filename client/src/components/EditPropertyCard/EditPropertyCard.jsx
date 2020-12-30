import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import EditModal from "../../components/EditModal/EditModal";
import ImageModal from "../ImageModal/ImageModal";
import placeholder from "../../images/placeholder.jpg";

const EditPropertyCard = ({ property, loadProperties }) => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleImageClose = () => setImageShow(false);
  const handleImageShow = () => setImageShow(true);

  return (
    <Card className="p-3 mb-3">
      <Row className="h-100">
        <Col sm={3} className="my-auto">
          <Card.Img
            alt="cover photo"
            src={property.image ? property.image : placeholder}
            onClick={handleImageShow}
          />
          <Card.Text className="text-center">Click on Image to Change</Card.Text>
        </Col>
        <Col sm={6} className="my-auto">
          <Card.Body>
            <Card.Title>
              {property.streetAddress}
              {property.streetAddress2 ? (
                <>
                  {", "}
                  {property.streetAddress2}
                </>
              ) : (
                ""
              )}
              <br />
              {property.city}, {property.state} {property.zipCode}
            </Card.Title>
            <Card.Subtitle className="my-3">{property.status}</Card.Subtitle>
            <Card.Subtitle className="mb-3">{property.price}</Card.Subtitle>
            <Card.Subtitle className="mb-3">
              {property.beds} bed, {property.baths} bath
            </Card.Subtitle>
            <Card.Subtitle className="mb-3">
              Year Built: {property.yearBuilt}
            </Card.Subtitle>
            <Card.Text>{property.description}</Card.Text>
            <Card.Text>
              <a target="_blank" rel="noreferrer" href={property.link}>
                Interested? See more info here!
              </a>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col sm={3} className="m-auto">
          <Button className="mb-2 editBtn" onClick={handleEditShow}>
            Edit Property
          </Button>
          <Button
            variant="danger"
            className="mt-2 deleteBtn"
            onClick={handleDeleteShow}
          >
            Delete Property
          </Button>
        </Col>
      </Row>
      <DeleteModal
        id={property._id}
        loadProperties={loadProperties}
        show={deleteShow}
        handleClose={handleDeleteClose}
      />
      <EditModal
        show={editShow}
        handleClose={handleEditClose}
        loadProperties={loadProperties}
        property={property}
      />
      <ImageModal
      show={imageShow}
      handleClose={handleImageClose}
      loadProperties={loadProperties}
      property={property}
      />
    </Card>
  );
};

export default EditPropertyCard;
