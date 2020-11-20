import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Home.css";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
      <Container fluid className="flex-fill home-container vh-100 align-items-center">
        <Row className="h-100">
            <Col className="text-center my-auto">
            <h1>HOME</h1>
            </Col>
        </Row>
      </Container>
  );
};

export default Home;
