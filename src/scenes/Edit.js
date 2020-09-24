import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function Edit() {
  return (
    <Container>
      <h2>Edit</h2>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Edit
