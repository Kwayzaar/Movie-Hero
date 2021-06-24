import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import ReviewForm from '../components/ReviewForm'

const movieUrl = "http://localhost:3000/movies/1"

class ReviewPage extends Component {
  state = {
    movie: {},
    title: "",
    description: "",
    reviews: [],
    newForm: ""
  }  

  componentDidMount() {
    fetch(movieUrl)
    .then(response => response.json())
    .then(movie => this.setState({ movie }))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newReview = {
      title: this.state.title,
      description: this.state.description
    }
    this.setState({
      reviews: [...this.state.reviews, newReview],
    })
    this.setState({
      title:"",
      description: ""
    })

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "applicaton/json"
    //   },
    //   body: JSON.stringify(newReview)
    // })
  }

  clearForm = () => {
    this.setState({reviews: this.state.newForm})
  }

  showReviews = () => {
    return this.state.reviews.map(review => {
      return <div className="review-text">
        <p>Title: {review.title}</p>
        <p>Description: {review.description}</p>
      </div>
    })
  }

  render() {

    return (
      <div className="wrap">
        <header className="header">
          <div className="nav-wrap">
            <div className="nav-content">
              <ul className="navbar nav-text">
              </ul>
            </div>
            <div className="nav-extra">
              <ul className="extra nav-text">
                <li>
                  <a href="" className="search-link">Search</a>
                </li>
                <li>
                <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="review-column">
          <div className="review-header">
            <img 
              src={this.state.movie.image_url} 
              alt={this.state.movie.name} 
            />
            <h2 className="movie-title">{this.state.movie.name}</h2> 
          </div>
          <div className="show-reviews">
            {/* <div className="review-text"> */}
              {this.showReviews()}
            {/* </div> */}
          </div>
        </div>
        <div className="review-column-2">
          <div className="review-form">
            <form className="review-card" onSubmit={this.handleSubmit} >
              <h1>Leave a Review!</h1>
              <label>Title</label>
              <input 
                type="text" 
                className="input"
                name="title" 
                value={this.state.title} 
                onChange={this.handleChange} 
              />
              <label>Description</label>
              <input 
                type="text" 
                className="input description"
                name="description" 
                value={this.state.description} 
                onChange={this.handleChange}
              />
              <input type="submit" className="button" value="Full Send" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewPage