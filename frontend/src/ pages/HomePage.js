import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

export default function HomePage({ user, baseUrl }) {
  const [movies, setMovies] = useState([])

  useEffect( () => {
    fetch("http://localhost3000/movie")
    .then(response => response.json())
    .then(result => (console.log))
  })

  const displayMovieCard = () => {
    return movies.map(movie => {
      return <MovieCard
        key = { movie.id }
        movie = { movie }      
      />
    })
  } 

  return (
    <div>
      
      <div className="home">
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
                    <a href="" className="search-link">Search</a>
                  </li>
                  {/* <li>
                    <a href="" className="join-link">Join</a>
                  </li> */}
                  <li>
                    <Link to="/login">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        <h2>Welcome {user.first_name}!</h2>        
        </div>
        <div className="container">
      <main id="main">
        <div className="App">
          <section className="top-content">
            <div className="content-wrap">
              <h2>Welcome to Movie Bank!</h2>
              <h3></h3>
              <h4></h4>
            </div>
          </section>
          <div className="sandwich">
            <h2></h2>
          </div>
        </div>
        <section className="movie-section">
          Airline Grid goes here 
          { displayMovieCard() }
        </section>
      </main>
    </div>
    </div>
  )
}
