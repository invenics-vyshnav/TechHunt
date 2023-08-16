import React from 'react'
import './styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-root">
      <div className="login-container">
        <div className="login-title">
          Sign up to
          <span className="login-logo">
            Tech<span className="login-logo-blue">Hunt</span>
          </span>
        </div>
        <div className="login-inputs">
          <form className="login-form">
            <input
              className="login-input"
              type="email"
              size="15"
              placeholder="Email ID"
            ></input>
            <input
              className="login-input"
              type="password"
              size="15"
              placeholder="Password"
            ></input>
           
            <input className="login-submit" type="submit" value="Sign in" />
          </form>
          
        </div>
        <div className="signup-login-text">
          Don't have an account? <Link to="/register" >Signup</Link>
          </div>
      </div>
    </div>
  )
}

export default Login