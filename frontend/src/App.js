import { Component, Profiler } from 'react';
import './App.css';
import SignUpForm from './ pages/SignUpForm';
import LoginForm from './ pages/LoginForm';
import HomePage from './ pages/HomePage';
import {Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

const baseUrl = "http://localhost:3000"

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
      fetch(baseUrl + "/profile", {
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

  login = (username, password, history) => {
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
        history.push('/')
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
        <Switch>
          <Route path="/signup" render={(routerProps) => <SignUpForm {...routerProps} signUp={this.signUp} />} />
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} login={this.login} error={this.state.error} />} />

          {/* privateRoute placed below other routes so Switch can see those routes and render the login page   */}
          <PrivateRoute path="/" component={HomePage} user={this.state.user} />
          
          {/* Homepage route: use for landing page and provide login link up top  */}
          <Route exact path="/" render={(routerProps) => <HomePage {...routerProps} user={this.state.user} />} />
        </Switch>
      </div>
    );
  }

}

export default App;
