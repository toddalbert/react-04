import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Home() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to DJAPOT Code School</h1>
          <p>
            We are the best React Devs around!
          </p>
          <Button variant="primary" size="lg"
            onClick={() => setCounter(counter + 1)}
          >
            Click Me
          </Button>
          <p>You clicked the button {counter} times</p>
        </Container>
      </Jumbotron>
    </>
  )

}

export default Home