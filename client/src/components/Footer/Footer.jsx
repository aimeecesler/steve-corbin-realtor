import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import logoWE from "../../images/Watersedge.png";
import MLS from "../../images/MLS-clear.png";
import EHO from "../../images/fheo350-clear.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto pt-1">
      <Container fluid>
        <Row>
          <Col sm={12} className="text-center">
            <img src={logoWE} alt="logo" className="footer-logo my-2" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center">
            <h5>Waters Edge Real Estate LLC</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center mb-2">
            <i className="fas fa-globe mr-1"></i>
            <a href="https://watersedgere.com/" className="footer-link" target="blank">
              www.watersedgere.com
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center">
            <h6>
              <i className="fas fa-map-marker-alt mr-1"></i>9900 Coconut Road
              <br />
              Suite #339
              <br />
              Estero, FL 34135
            </h6>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center mb-2">
            <img src={MLS} alt="logo" className="footer-badge" />
            <img src={EHO} alt="logo" className="footer-badge" />
          </Col>
        </Row>
        <Row>
          <span className="col-sm-12 text-center my-auto text-white copyright py-1">
            Copyright&copy; 2020
          </span>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
