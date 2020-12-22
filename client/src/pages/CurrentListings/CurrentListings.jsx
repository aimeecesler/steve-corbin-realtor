import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CurrentListings.css";

const CurrentListings = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = () => {
    axios
      .get("/api/properties")
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container
      fluid
      className="flex-fill listings-container vh-100 align-items-center"
    >
      <Row className="mt-5">
        <Col sm={2}></Col>
        <Col sm={8}>
          {properties.map((property, index) => (
            <PropertyCard 
            key={index}
            property={property}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentListings;
