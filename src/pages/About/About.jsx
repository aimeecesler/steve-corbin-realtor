import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import headshot from "../../images/headshot.jpg";
import Container from "react-bootstrap/Container";
import "./About.css";

const About = () => {
  return (
    <Container fluid className="about-bg">
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <Card className="my-5 p-4" bg="light" border="info">
            <Row>
              <Col sm={3}>
                <Card.Img alt="Steve Corbin Headshot" src={headshot} />
              </Col>
              <Col sm={9}>
                <Card.Body>
                  <Card.Title className="quote-title">
                    In this journey of life, you will meet people who will make
                    you feel alive!
                  </Card.Title>
                  <Card.Subtitle className="mb-4">– Avijeet Das</Card.Subtitle>
                  <Card.Text>
                    Representing Southwest Florida buyers and sellers, Steve’s
                    enthusiastic can-do attitude and caring nature is ideal for
                    identifying each client’s desires and dreams and skillfully
                    guiding them to fulfill their real estate goals.
                  </Card.Text>
                  <Card.Text>
                    Born in Florida and raised along the East Coast in a
                    military family before returning to Florida over 35 years
                    ago Steve understands and appreciates all of the benefits
                    living in Southwest Florida with our unmatched quality of
                    beaches, beauty, culture and amazing restaurants.
                  </Card.Text>
                  <Card.Text>
                    As a very active and connected community member, he has
                    served as the Governor for South Florida District Optimist
                    International, he is currently a Board Member for his
                    community HOA and can be seen on the side lines of most
                    Estero High School football games working the chains. In his
                    spare time, he also enjoys all outdoor sports including
                    hunting, fishing and Florida Gator football.
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

export default About;
