import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const movieUrl = "http://localhost:3000/movies/1"

class ReviewPage extends Component {
  state = {
    movie: {}
  }

  componentDidMount() {
    fetch(movieUrl)
    .then(response => response.json())
    .then(movie => this.setState({ movie }))
  }
  render() {

    // console.log(this.props)

    return (
      <div>
          <Link to="/login">Logout</Link>
        <div className="review-card">
          <div className="movie-poster">
            <img src={this.state.movie.image_url} alt={this.state.movie.name} />
          </div>
          <div className="review-title">
            {this.props.title} 
          </div>
          <div className="review-description">
            description here 
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewPage