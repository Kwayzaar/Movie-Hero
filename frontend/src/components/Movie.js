import React, { useState, useEffect} from 'react'

function Movie() {
  
  const [movie, setMovie] = useState({})
  const [review, setReview] = useState({})

  useEffect( () => {

  }, [])

  return (
    <div>
      <div>
          <Link to="/login">Logout</Link>
        <div className="review-card">
          <div className="movie-poster">
            Movie image here
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
    </div>
  )
}

export default Movie