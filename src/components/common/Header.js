import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { UserContext } from '../../App'

function Header() {
  let { isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext)
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
        <Nav>
          <Nav.Link>
            {isLoggedIn
              ? <Button variant="dark" onClick={() => {
                setIsLoggedIn(false)
                setUser(null)
              }}>Log Out</Button>
              : <Button variant="dark" onClick={() => {
                setIsLoggedIn(true)
                setUser('Todd Albert')
              }}>Log In</Button>
            }
          </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  )
}

export default Header