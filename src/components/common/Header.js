import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function Header() {
  return (
    <NavBar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Nav className="mr-auto">
          <NavLink exact to="/">
            <Button variant="dark">Home</Button>
          </NavLink>
          <NavLink exact to="/courses">
            <Button variant="dark">Courses</Button>
          </NavLink>
          <NavLink exact to="/edit">
            <Button variant="dark">Edit</Button>
          </NavLink>
        </Nav>
      </Container>
    </NavBar>
  )
}

export default Header