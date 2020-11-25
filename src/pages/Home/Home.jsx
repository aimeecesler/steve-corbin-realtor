import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Home.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import mottoWhite from "../../images/SCMottoWhite.png";
import mottoBlack from "../../images/SCMottoBlack.png";

const Home = () => {
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("SUBMIT");
  };

  return (
    <Container
      fluid
      className="flex-fill home-container vh-100 align-items-center"
    >
      <Row>
        <Col sm={12} className="text-center">
          <img src={mottoWhite}  className="motto" alt="Where home is your Oasis."/>
        </Col>
      </Row>
      <Row className="h-100">
        <Col sm={4} className="text-center m-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSearch">
              <Form.Control
                type="text"
                placeholder="Address, City, Zip, Community or MLS Number"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
