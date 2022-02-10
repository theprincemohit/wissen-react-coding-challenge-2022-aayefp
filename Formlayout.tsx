import React, { useState } from 'react';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';

async function loginUser(credentials) {
  return fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => {
      console.log('aa', data);
      return data.json();
    })
    .then((data) => {
      console.log('aab', data);
      // data.json();
      return data;
    })
    .catch(() => {
      console.log('inside aa');
    });
}

export default function Formlayout({ handleToken }) {
  const [FormData, setFormData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });
  const handleInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email: FormData.email,
      password: FormData.password,
    });
    console.log('token', token);
    handleToken(token);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>Hello there, Sign in to continue</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleInput}
                    value={FormData.email}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInput}
                    value={FormData.password}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
