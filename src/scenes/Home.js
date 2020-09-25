import React, { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function Home() {
  //     These go everywhere    This in top-level only
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${counter} times!`
  }, [counter])
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to DJAPOT Code School</h1>
          <p>
            We are the best React Devs around!
          </p>
          <ButtonGroup>
            <Button onClick={() => setCounter(counter - 1)}>-</Button>
            <Button onClick={() => setCounter(0)}>Reset</Button>
            <Button onClick={() => setCounter(counter + 1)}>+</Button>
          </ButtonGroup>
          <p>You clicked the button {counter} times</p>
        </Container>
      </Jumbotron>
    </>
  )

}

export default Home