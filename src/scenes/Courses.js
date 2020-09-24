import React from 'react'

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
      <>
        <h2>Short Courses</h2>
        {(courses.length === 0)
          ? <p>Loading...</p>
          : <div className="course-section">
            {/* I want to render a LIST && KEYS */}
            {courses.map((aCourse, index) => {
              return (
                <div className="course" key={index}>{aCourse.title}</div>
              )
            })}
          </div>
        }
      </>
    )
  }
}

export default Courses