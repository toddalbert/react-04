import React from 'react'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: ''
    }
  }
  render() {
    let { name, phone } = this.state
    // document.title = name
    return (
      <form>
        <h1>Enter your name:</h1>
        <label>
          Name:
          <input type="text"
            onChange={(e) => {
              let newValue = e.target.value
              this.setState({ name: newValue })
              this.props.handleMyState({ yourName: newValue })
            }}
            value={name} />
        </label>
        <label>
          Phone:
          <input type="tel"
            onChange={(e) => {
              let newValue = e.target.value
              this.setState({ phone: newValue })
            }}
            value={phone} />
        </label>
        <button type="submit" onClick={() => {
          alert('Your name is: ' + name + ' and your phone is ' + phone)
        }}>Submit</button>
      </form>
    )
  }
}

export default Edit