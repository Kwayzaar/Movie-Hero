import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ReviewPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Link to="/login">Logout</Link>        
      </div>
    )
  }
}
