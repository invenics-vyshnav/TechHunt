import React, { useState } from 'react'
import './styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { apiLogin } from '../api/api'
import { useGlobalStore } from '../store'




const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useGlobalStore()
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
        email: email,
        password: password

    };
    if(await apiLogin(userData)){
        setUser({email, password});
        navigate('/')
    }
    else{
      alert("Invalid credentials")
    }
  };

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
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              className="login-input"
              type="email"
              size="15"
              placeholder="Email ID"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
            <input
              className="login-input"
              type="password"
              size="15"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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