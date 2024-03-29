import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'


export default class HomePage extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
  fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies => this.setState({ movies }))
  }

  displayMovieCard(movies) {
    return this.state.movies.map(movie => {
      return <MovieCard
        key = { movie.id }
        movie = { movie }      
      />
    })
  }

  render() {
    return (
      <div>
        {/* <h2>Welcome {this.props.user.first_name}!</h2>
        <Link to="/login">Logout</Link> */}
        <header className="header">
          <div className="nav-wrap">
            <div className="nav-content">
              {/* <a className="logo" href="">Movie Bank</a> */}
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
        <div className="container">
          <main id="main">
            <div className="App">
              <section className="top-content">
                <div className="content-wrap">
                  <h2>Welcome Eric!</h2>
                  <h3></h3>
                  <h4></h4>
                </div>
              </section>
              <div className="sandwich">
                <h2></h2>
              </div>
            </div>
            <section className="movie-section">
              { this.displayMovieCard() }
            </section>
          </main>
        </div>
      </div>
    )
  }
}



// export default function HomePage(props) {

//   return (
//     <div>
//       <h2>Welcome {props.user.first_name}!</h2>
//       <Link to="/login">Logout</Link>
//     </div>
//   )
// }
