import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import facebook from "../../images/fbicon.png";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="flex-fill contact-bg">
      <Container>
        <Row className="mt-5">
          <Col sm={8} className="text-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScEgLbeRs3tAP4DpKT_JiVmcu-mVhyw5R-vxhLsxxqPGjRdUw/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              title="googleForm"
            >
              Loading…
            </iframe>
          </Col>
          <Col sm={4} className="text-center">
            <Card className="bg-info text-white contact-card-bg mb-5">
              <Card.Body>
                <Card.Title>Direct Contact Information</Card.Title>
                <Card.Text>
                  <b>Email: </b>
                  <Card.Link
                    className="contact-link"
                    href="MAILTO:stevecorbinrealtor@gmail.com"
                  >
                    SteveCorbinRealtor@gmail.com
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                  <b>Phone: </b>
                  <Card.Link className="contact-link" href="tel:2396337255">
                    (239) 633-7255
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                  <Card.Link href="https://www.facebook.com/stevecorbinre" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="facebook icon link" className="facebook-link"></img>
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Contact;
