import React, { useEffect, useState } from 'react';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';

export default function Users({ token, logout }) {
  const [FormData, setFormData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });
  const handleInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    async function getUsers(token) {
      console.log('abcd', token);
      return fetch('https://reqres.in/api/unknown', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(credentials),
      })
        .then((data) => {
          console.log('aa users', data.json());
          return data.json();
        })
        .then((data) => {
          console.log('aab users', data);

          return data;
        })
        .catch((e) => {
          console.log('inside aa users', e);
        });
    }
    getUsers(token);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>
              Hello there, Sign in to continue {token}
              <Button variant="primary" onClick={logout}>
                Logout
              </Button>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
