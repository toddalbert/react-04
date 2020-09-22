import React, { Component } from 'react'

const initialValue = 50

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: initialValue }
  }
  handleClick(change) {
    let old_counter = this.state.counter
    this.setState({ counter: old_counter + change })
  }
  handleReset() {
    this.setState({ counter: initialValue })
  }
  render() {
    let { name } = this.props
    let { counter } = this.state
    return (
      <>
        <h1>Hello, {name}</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => this.handleClick(5)}>+5</button>
        <button onClick={() => this.handleClick(1)}>+1</button>
        <button onClick={() => this.handleReset()}>Reset</button>
        <button onClick={() => this.handleClick(-1)}>-1</button>
        <button onClick={() => this.handleClick(-5)}>-5</button>
      </>
    )
  }
}

export default Welcome