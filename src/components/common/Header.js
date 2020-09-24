import React from 'react'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <NavBar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  )
}

export default Header