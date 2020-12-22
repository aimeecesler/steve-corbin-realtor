import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const PropertyCard = (props) => {
  return (
    <Card className="p-3">
      <Row className="h-100">
        <Col sm={3}>
          <Card.Img
            alt="cover photo"
            src="https://via.placeholder.com/250x250"
            className="my-auto"
          />
        </Col>
        <Col sm={9} className="my-auto">
          <Card.Body>
            <Card.Title>address</Card.Title>
            <Card.Subtitle className="mb-2" >status</Card.Subtitle>
            <Card.Subtitle className="mb-2" >beds, baths</Card.Subtitle>
            <Card.Subtitle>yearBuilt</Card.Subtitle>
            <Card.Text>description</Card.Text>
            <Card.Text>link</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PropertyCard;
