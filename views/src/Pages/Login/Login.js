import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [logInUser, setLoginUpUser] = useState({
    email: "",
    password: "",
  });
  let dataKey, value;
  const handleInput = (e) => {
    dataKey = e.target.name;
    value = e.target.value;
    setLoginUpUser({ ...logInUser, [dataKey]: value });
    console.log(e);
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = logInUser;
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      window.alert(data.message);
      console.log(data.message);
      navigate("/");
    }
  };
  return (
    <div>
      <Container className="login-container bg-secondary text-white">
        <Row className="vh-40 mt-5 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4 login-col bg-dark">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <Form>
                      {/*------= Enter email-----*/}

                      <Form.Control
                        className="mb-3 "
                        name="email"
                        id="email"
                        type="email"
                        value={logInUser.email}
                        onChange={handleInput}
                        placeholder="Enter email"
                      />

                      {/*------= Enter Password------*/}

                      <Form.Control
                        className="mb-3 "
                        name="password"
                        id="password"
                        type="password"
                        value={logInUser.password}
                        onChange={handleInput}
                        placeholder="Password"
                      />

                      {/*----Create Account Button---*/}

                      <Button
                        className="login_button"
                        variant="primary"
                        type="submit"
                        onClick={PostData}
                      >
                        Sign In
                      </Button>
                    </Form>
                    {/*--------- Sign In-------------*/}

                    <p className="mb-0 mt-3  text-center">
                      If you don't have Account??{" "}
                      <Link to="/signup" className="text-primary fw-bold">
                        Create Account
                      </Link>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
