export function getCourses() {
  fetch('https://bocanode.web.app/courses.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
}