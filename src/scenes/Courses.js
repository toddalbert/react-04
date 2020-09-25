import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import CourseCard from '../components/courses/CourseCard'

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
            {courses.map((aCourse, index) => <CourseCard key={index} course={aCourse} />)}
          </CardColumns>
        }
      </Container>
    )
  }
}

export default Courses