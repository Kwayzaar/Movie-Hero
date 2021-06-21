import { Component, Profiler } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const baseUrl = "http://localhost:3000/"

class App extends Component {
  // store user in state 
  state = {
    user: {},
    error: ""
  }

  //send this down to any component we wish to stay logged into 
  componentDidMount(){
    this.validateUser()
  }

  validateUser = () => {
    let token = localStorage.getItem('token')
    if(token){
      fetch(baseUrl + "profile", {
        method: "GET", 
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if(result.id){
          this.setState({
            user: result
          })
        }
      })
    }
  }

  signUp = user => {
    fetch(baseUrl + "/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //data being sent must match what backend (controller) is expecting, w/ re to first_name, last_name
        user: {
          first_name: user.firstName,
          last_name: user.lastName,
          username: user.username,
          password: user.password
        }
      })
    })
    .then(response => response.json())
    .then(user => this.setState({ user }) )
  }

  login = (username, password) => {
    fetch(baseUrl + "/login", {
      method: "POST", 
      headers: {
        "Content-Type": 'application/json'
      }, 
      body: JSON.stringify({
        user: {
          username,
          password 
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result.token){
        localStorage.setItem('token', result.token)
        this.setState({
          user: result.user
        })
      } else {
        this.setState({
          error: result.error
        })
      }
    })
  }

  render () {
    return (
      <div className="App">
        {this.state.user.username
          ? <h2>Welcome, {this.state.user.first_name}!</h2>
          : (
          <> 
            <SignUpForm signUp={ this.signUp } />
            <LoginForm login={ this.login } error={this.state.error} />
          </>    
          )
        }
      </div>
    );
  }
}

export default App;
