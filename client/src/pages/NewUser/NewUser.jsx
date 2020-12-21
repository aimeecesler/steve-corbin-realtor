import React, { useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const NewUser = () => {
  const history = useHistory();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const { setJwt } = useContext(AuthContext);

  const createNewUser = function (e) {
    e.preventDefault();
    e.stopPropagation();
    axios
      .post("/api/signup", newUser)
      .then((res) => {
        setJwt(res.data.data);
        history.push("/manage-properties");
      })
      .catch((err) => {
        console.log(err);
        // setAlert({
        //   message: "Account creation failed. Please try again.",
        //   type: "danger",
        // });
      });
  };

  return (
    <Container
      fluid
      className="flex-fill login-container vh-100 align-items-center"
    >
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Form className="mt-5" onSubmit={createNewUser}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    email: e.currentTarget.value.toLowerCase(),
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.currentTarget.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="loginBtn">
              Create New User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewUser;
