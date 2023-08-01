import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let dataKey, value;
  const handleInput = (e) => {
    dataKey = e.target.name;
    value = e.target.value;
    setSignUpUser({ ...signUpUser, [dataKey]: value });
    console.log(e);
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = signUpUser;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });
    const data = await res.json();
    // console.log("status", data.status);
    if (data.status === 422 || !data) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      window.alert(data.message);
      console.log(data.message);
      navigate("/login");
    }
  };
  return (
    <div>
      <Container className="signup-container  bg-secondary text-white">
        <Row className="vh-40 mt-5 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4 signup-col bg-dark">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <Form method="POST" id="register-form">
                      {/*------= Enter Name------*/}

                      <Form.Control
                        className="mb-3 "
                        name="name"
                        id="name"
                        type="text"
                        value={signUpUser.name}
                        onChange={handleInput}
                        placeholder="Enter Name"
                      />

                      {/*------= Enter email-----*/}

                      <Form.Control
                        className="mb-3 "
                        name="email"
                        id="email"
                        type="email"
                        value={signUpUser.email}
                        onChange={handleInput}
                        placeholder="Enter email"
                      />

                      {/*----- Enter Phone No-----*/}

                      <Form.Control
                        className="mb-3 "
                        name="phone"
                        id="phone"
                        type="number"
                        value={signUpUser.phone}
                        onChange={handleInput}
                        placeholder="Enter Phone No"
                      />

                      {/*------= Enter Work------*/}

                      <Form.Control
                        className="mb-3 "
                        name="work"
                        id="work"
                        type="text"
                        value={signUpUser.work}
                        onChange={handleInput}
                        placeholder="Enter Work"
                      />

                      {/*------= Enter Password------*/}

                      <Form.Control
                        className="mb-3 "
                        name="password"
                        id="password"
                        type="password"
                        value={signUpUser.password}
                        onChange={handleInput}
                        placeholder="Password"
                      />

                      {/*----Enter Confirm Password---*/}

                      <Form.Control
                        className="mb-3"
                        name="cpassword"
                        id="cpassword"
                        type="password"
                        value={signUpUser.cpassword}
                        onChange={handleInput}
                        placeholder="Conform your Password"
                      />

                      {/*----Create Account Button---*/}

                      <Button
                        className="signup_button"
                        variant="primary"
                        type="submit"
                        onClick={PostData}
                      >
                        Create Account
                      </Button>
                    </Form>
                    {/*--------- Sign In-------------*/}

                    <p className="mb-0 mt-3  text-center">
                      Already have an account??{" "}
                      <Link to="/login" className="text-primary fw-bold">
                        Sign In
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
