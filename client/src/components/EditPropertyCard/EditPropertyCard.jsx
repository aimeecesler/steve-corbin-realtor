import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

const EditPropertyCard = ({ handleEditShow, property, loadProperties }) => {

  const [deleteShow, setDeleteShow] = useState(false);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  return (
    <Card className="p-3 mb-3">
      <Row className="h-100">
        <Col sm={3} className="my-auto">
          <Card.Img
            alt="cover photo"
            src="https://via.placeholder.com/250x250"
          />
        </Col>
        <Col sm={6} className="my-auto">
          <Card.Body>
            <Card.Title>
              {property.streetAddress}, {property.streetAddress2}
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
          <Button variant="danger" className="mt-2 deleteBtn" onClick={handleDeleteShow}>
            Delete Property
          </Button>
        </Col>
      </Row>
      <DeleteModal id={property._id} loadProperties={loadProperties} show={deleteShow} handleClose={handleDeleteClose} />
    </Card>
  );
};

export default EditPropertyCard;
