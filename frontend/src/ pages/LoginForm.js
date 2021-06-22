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
    <form onSubmit={handleSubmit}>
      <h2 className="login-title">Login</h2>
      <label>Username</label>
      <input name="username" value={username} onChange={handleUsernameChange} />
      <label>Password</label>
      <input type="password" name="password" value={password} onChange={handlePasswordChange} />
      <p>
        Need your own tracker? 
        <Link to="/signup"> Sign Up!</Link> 
      </p>
      {error ? <p style={{color: 'red'}}>{error}</p> : null}
      <input type="submit" value="Login"/>
    </form>
  )
}
