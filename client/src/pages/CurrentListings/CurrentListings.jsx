import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const CurrentListings = () => {
  return (
    <Container>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <Card className="p-3">
            <Row>
              <Col sm={3}>
                <Card.Img
                  alt="cover photo"
                  src="https://via.placeholder.com/250x250"
                />
              </Col>
              <Col sm={9}>
                <Card.Body>
                  <Card.Title>Home Address</Card.Title>
                  <Card.Text>
                    Home details
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentListings;
