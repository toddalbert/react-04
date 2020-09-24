import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to DJAPOT Code School</h1>
          <p>
            We are the best React Devs around!
          </p>
        </Container>
      </Jumbotron>
    </>
  )

}

export default Home