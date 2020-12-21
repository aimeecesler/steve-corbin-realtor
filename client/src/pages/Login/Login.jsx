import React, { useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { setJwt } = useContext(AuthContext);
  const history = useHistory();

  const loginUser = function (e) {
    e.preventDefault();
    axios
      .post("/api/login", login)
      .then((res) => {
        setJwt(res.data.data);
        history.push("/manage-properties");
      })
      .catch((err) => {
        console.log(err);
        // setAlert({
        //   message: "Login failed. Please try again.",
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
          <Form className="mt-5" onSubmit={loginUser}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={login.email}
                onChange={(e) =>
                  setLogin({
                    ...login,
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
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.currentTarget.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="loginBtn">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
