import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col sm={8}></Col>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Me</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                Email:{" "}
                <Card.Link href="MAILTO:stevecorbinrealtor@gmail.com">
                  SteveCorbinRealtor@gmail.com
                </Card.Link>
              </Card.Text>
              <Card.Text>
                Phone:{" "}
                <Card.Link href="tel:2396337255">(239) 633-7255</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
