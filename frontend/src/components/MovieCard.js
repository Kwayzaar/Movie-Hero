import React from 'react'
import {Link} from 'react-router-dom'

export default function MovieCard({ movie }) {
  return (
    <div className="card-wrap"> 
      <div className="image">
        <a href="" className="image">
          <Link to="/review">
            <img className="poster" src={ movie.image_url } alt={ movie.name }/>
          </Link>
        </a>
      </div>
      <div>
        <h3 className="card-content">
          { movie.name}
        </h3>
      </div>
    </div>
  )
}
