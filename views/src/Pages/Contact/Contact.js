import React from "react";
import "./Contact.css";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <Container className="contact-container ">
        <Row className="vh-40 mt-5 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4 contact-col bg-dark">
              <Card.Body>
                <h2 className="fw-bold mb-4 text-center text-uppercase ">
                  Get in Touch
                </h2>
                <Form>
                  <div className=" gap-2 d-flex justify-content-between align-items-between">
                    {/*------= Enter email-----*/}

                    <Form.Control
                      className="mb-3 "
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter name"
                    />
                    <Form.Control
                      className="mb-3 "
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Control
                      className="mb-3 "
                      name="phone"
                      id="phone"
                      type="number"
                      placeholder="Enter phone"
                    />
                  </div>
                  <div className="contact_form_text">
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="Message"
                      cols="80"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="contact_button_container">
                    <Button
                      className="contact_button"
                      variant="info"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
