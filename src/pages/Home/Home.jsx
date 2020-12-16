import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Home.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import mottoWhite from "../../images/SCMottoWhite.png";
import { useHistory } from "react-router-dom";

const Home = () => {
const history = useHistory();
  return (
    <Container
      fluid
      className="flex-fill home-container vh-100 align-items-center"
    >
      <Row className="h-100">
        <Col sm={12} className="m-auto pb-5">
        <Row>
        <Col sm={12} className="text-center mb-2">
          <img src={mottoWhite}  className="motto" alt="Where home is your Oasis."/>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="text-center m-auto">
            <Button variant="primary" className="searchBtn" size="lg" onClick={() => history.push("/search")}>
              Search Properties
            </Button>
        </Col>
      </Row>
        </Col>
      </Row>

    </Container>
  );
};

export default Home;
