import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import MovieCard from './'

export default function HomePage(props) {
  const [movies, setMovies] =useState([])

  // const displayMovieCard = () => {
  //   return movies.map(movie => {
  //     return <MovieCard
  //       key = { movie.id }
  //       movie = { movie }      
  //     />
  //   })
  // } 

  return (
    <div className="home">
      <h2>Welcome {props.user.first_name}!</h2>
      <header className="header">
          <div className="nav-wrap">
            <div className="nav-content">
              {/* <a className="logo" href="">Movie Bank</a> */}
              <ul className="navbar nav-text">
                <li>
                  <a href="" className="movies-link">Movies</a>
                </li>
                <li>
                  <a href="" className="actors-link nav-text">Actors</a>
                </li>
              </ul>
            </div>
            <div className="nav-extra">
              <ul className="extra nav-text">
                <li>
                  <a href="" className="login-link">Login</a>
                </li>
                <li>
                  <a href="" className="join-link">Join</a>
                </li>
                <li>
                  <a href="" className="search-link">Search</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      <Link to="/login">Logout</Link>

    </div>
  )
}
