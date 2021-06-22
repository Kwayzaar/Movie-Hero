import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <div className="card-wrap"> 
      <div className="image">
        <a href="" className="image">
          <img className="poster" src={ movie.poster_url } alt={ movie.title }/>
        </a>
      </div>
      <div>
        <h3 className="card-content">
          { movie.title}
        </h3>
      </div>
    </div>
  )
}
