import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
    }
  }
  componentDidMount() {
    let API_URL = 'https://bocanode.web.app/courses.json'
    fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({ courses: data }))
  }
  render() {
    let { courses } = this.state
    return (
      <Container>
        <h2>Short Courses</h2>
        {(courses.length === 0)
          ? <p>Loading...</p>
          : <CardColumns>
            {/* I want to render a LIST && KEYS */}
            {courses.map((aCourse, index) => {
              return (
                <Card key={index}>
                  <Card.Img variant="top" src={aCourse.image} />
                  <Card.Body>
                    <Card.Title>{aCourse.title}</Card.Title>
                    <Card.Text>
                      {aCourse.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
          </CardColumns>
        }
      </Container>
    )
  }
}

export default Courses