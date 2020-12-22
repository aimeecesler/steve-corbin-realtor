import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const PropertyCard = ({property}) => {
  return (
    <Card className="p-3 mb-3">
      <Row className="h-100">
        <Col sm={3} className="my-auto">
          <Card.Img
            alt="cover photo"
            src="https://via.placeholder.com/250x250"
          />
        </Col>
        <Col sm={9} className="my-auto">
          <Card.Body>
            <Card.Title>
              {property.streetAddress}{property.streetAddress2 ? <>{", "}{property.streetAddress2}</> : ""}
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
      </Row>
    </Card>
  );
};

export default PropertyCard;
