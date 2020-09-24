import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <NavBar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Nav className="mr-auto">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/courses">Courses</NavLink>
          <NavLink exact to="/edit">Edit</NavLink>
        </Nav>
      </Container>
    </NavBar>
  )
}

export default Header