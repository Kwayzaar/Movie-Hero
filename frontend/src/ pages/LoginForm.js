import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm({ login, error, history }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    localStorage.removeItem('token')
  }, []) 

  const handleUsernameChange = event => setUsername(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    login(username, password, history)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* <h2 className="login-title">Login</h2> */}
        <label>Username</label>
        <input className="input" name="username" value={username} onChange={handleUsernameChange} />
        <label>Password</label>
        <input className="input" type="password" name="password" value={password} onChange={handlePasswordChange} />
        <p>
          Ready to start tracking? 
        </p>
          <Link to="/signup">Join Us.</Link> 
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <input className="button" type="submit" value="Enter"/>
      </form>
    </div>
  )
}
