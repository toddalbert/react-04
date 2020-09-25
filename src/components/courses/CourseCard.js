import React from 'react'
import Card from 'react-bootstrap/Card'

function CourseCard({ course }) {
  return (
    <Card>
      <Card.Img variant="top" src={course.image} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          {course.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">ONLY ${course.cost}</small>
      </Card.Footer>
    </Card>
  )
}

export default CourseCard