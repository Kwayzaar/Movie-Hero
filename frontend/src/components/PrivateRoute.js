import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// privateRoute structure: either gives route, or redirects 
export default function PrivateRoute({ path, component: Component, ...props }) {
  // If logged in, Route will take you to home page 
  return localStorage.token
    ? <Route exact path={path} render={routerProps => <Component {...routerProps} {...props} />} />
  //If not logged in, page will redirect to login 
    : <Redirect to="/login" />    
}

