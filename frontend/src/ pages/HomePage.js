import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {

  fetch("http://localhost:3000/movies")
  .then(response => response.json())
  .then(console.log)

  return (
    <div>
      <h2>Welcome {props.user.first_name}!</h2>
      <Link to="/login">Logout</Link>
    </div>
  )
}
