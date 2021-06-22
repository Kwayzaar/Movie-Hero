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
        <h2>Welcome {this.props.user.first_name}!</h2>
        <Link to="/login">Logout</Link>
        <section>{ this.displayMovieCard() }</section>
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
