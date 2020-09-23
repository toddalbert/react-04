import React from 'react'
import CourseItem from './CourseItem'

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
    }
  }
  componentDidMount() {
    // go out to this url and grab the json
    fetch('https://bocanode.web.app/courses.json')
      // parse the json from the response
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ courses: data })
      })
  }
  render() {
    let { courses } = this.state
    if (courses.length === 0) {
      return <>Loading...</>
    }
    return (
      <>
        <h2>Short Courses</h2>
        <div className="course-section">
          {courses.map((item, index) => {
            return <CourseItem key={index} course={item} />
          })}
        </div>
      </>
    )
  }
}

export default Courses