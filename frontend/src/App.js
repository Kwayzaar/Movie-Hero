import { Component } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const baseUrl = "http://localhost:3000"

class App extends Component {
  // store user in state 
  state = {
    user: {}
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
  }

  render () {
    return (
      <div className="App">
        {this.state.user.username
          ? <h2>Welcome { this.state.user.firstName }!</h2>
          : (
          <> 
            <SignUpForm signUp={ this.signUp } />
            <LoginForm login={ this.login } />
          </>    
          )
        }
      </div>
    );
  }
}

export default App;
