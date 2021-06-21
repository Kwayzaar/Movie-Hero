import { Component } from "react"
import {Link} from 'react-router-dom'

class SignUpForm extends Component {
  //keys matchup with names in input 
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    const user = this.state 
    this.props.signUp(user) 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        {/* value of name attribute based on backend  */}
        <label>FirstName</label>
          <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <label>LastName</label>
          <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <label>UserName</label>
          <input name="username" value={this.state.username} onChange={this.handleChange} />
        <label>Password</label>
          <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
          <p>
            Already a user?
            <Link to="/login">Login</Link>
          </p>
          <input type="submit" value="Sign Up" />
      </form>
    )
  }
}

export default SignUpForm