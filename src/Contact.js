import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form className="w-75">
      <Form.Group className="mb-3" controlId="Form.1">
          <Form.Label> First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your unique first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Form.2">
          <Form.Label> Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your unique last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Form.3">
          <Form.Label> Email</Form.Label>
          <Form.Control type="email" placeholder="unique@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Form.4">
          <Form.Label> Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your unique phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your unique message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;