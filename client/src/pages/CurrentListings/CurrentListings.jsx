import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./CurrentListings.css";

const CurrentListings = () => {
  return (
    <Container
      fluid
      className="flex-fill listings-container vh-100 align-items-center"
    >
      <Row className="mt-5">
        <Col sm={2}></Col>
        <Col sm={8}>
          <PropertyCard />
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentListings;
