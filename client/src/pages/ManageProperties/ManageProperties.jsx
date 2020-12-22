import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import EditPropertyCard from "../../components/EditPropertyCard/EditPropertyCard";
import "./ManageProperties.css";
import Button from "react-bootstrap/Button";
import NewModal from "../../components/NewModal/NewModal";
import { useState, useEffect } from "react";
import axios from "axios";

const ManageProperties = () => {
  const [newShow, setNewShow] = useState(false);
  const [properties, setProperties] = useState([]);

  const handleNewClose = () => setNewShow(false);
  const handleNewShow = () => setNewShow(true);

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
      className="flex-fill manage-container align-items-center"
    >
      <Row>
        <Col sm={12} className="text-center mt-5">
          <Button className="newBtn" size="lg" onClick={handleNewShow}>
            Add New Property
          </Button>
        </Col>
      </Row>
      <Row className="my-5">
        <Col sm={2}></Col>
        <Col sm={8}>
          {properties.map((property, index) => (
            <EditPropertyCard
              key={index}
              property={property}
              loadProperties={loadProperties}
            />
          ))}
        </Col>
      </Row>
      <NewModal
        show={newShow}
        handleClose={handleNewClose}
        loadProperties={loadProperties}
      />
    </Container>
  );
};

export default ManageProperties;
