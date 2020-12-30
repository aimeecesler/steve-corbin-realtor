import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Home.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import mottoWhite from "../../images/SCMottoWhite.png";
import facebook from "../../images/fbicon.png";

const Home = () => {
  return (
    <Container
      fluid
      className="flex-fill home-container vh-100 align-items-center"
    >
      <Row className="h-100">
        <Col sm={12} className="m-auto pb-5">
          <Row>
            <Col sm={12} className="text-center mb-2">
              <img
                src={mottoWhite}
                className="motto"
                alt="Where home is your Oasis."
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="text-center m-auto">
              <Link to="/search">
                <Button variant="primary" className="searchBtn" size="lg">
                  Search Properties
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="text-center mx-auto mt-4">
              <a
                href="https://www.facebook.com/stevecorbinre"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebook}
                  alt="facebook icon link"
                  className="facebook-link"
                ></img>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
