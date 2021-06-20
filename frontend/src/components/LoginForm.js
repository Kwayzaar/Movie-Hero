import React, { useState } from 'react'

export default function LoginForm({ login }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = event => setUsername(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    login(username, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input name="username" value={username} onChange={handleUsernameChange} />
      <label>Password</label>
      <input type="password" name="password" value={password} onChange={handlePasswordChange} />
      <input type="submit" value="Login"/>
    </form>
  )
}
