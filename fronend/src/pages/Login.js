import React, { useState } from 'react'
import './styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'




const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        email: email,
        password: password

    };
    try {
      const res = axios.post("http://localhost:8000/login/", userData)
      .then(res => {
        console.log(res.data.status)

        if(res.data.status == 'error'){
          alert("Invalid Credentials")
        }
        else{
          navigate('/home')
        }
        // alert("User Created Successfully")
        // // eslint-disable-next-line no-restricted-globals
        // navigate('/home')
    })
     
    
    } catch (err) {
      console.error(err);
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