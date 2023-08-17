import React, { useState } from "react";
import "./styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { apiSignup } from "../api/api";

const Signup = () => {

    const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isMentor, setIsMentor] = useState(false)
  
  const  handleSubmit = async (event) =>{
    event.preventDefault()

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

    const userData = {
        full_name: fullName,
        user_name: username,
        email: email,
        password: password,
        is_mentor: isMentor

    };
if(await apiSignup(userData)){
  alert("User successfully created")
  navigate('/login')
}
else{
  alert("Failed to register")
}
  }

  return (
    <div className="signup-root">
      <div className="signup-container">
        <div className="signup-title">
          Sign up to{" "}
          <span className="signup-logo">
            Tech<span className="signup-logo-blue">Hunt</span>
          </span>{" "}
        </div>
        <div className="signup-inputs">
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              className="signup-input"
              type="text"
              size="15"
              placeholder="Full Name"
              value={fullName} onChange={e => setFullName(e.target.value)}
            ></input>
            <input
              className="signup-input"
              type="text"
              size="15"
              placeholder="Username"
              value={username} onChange={e => setUsername(e.target.value)}
            ></input>
            <input
              className="signup-input"
              type="email"
              size="15"
              placeholder="Email ID"
              value={email} onChange={e => setEmail(e.target.value)}
              
            ></input>
            <input
              className="signup-input"
              type="password"
              size="15"
              placeholder="Password"
              value={password} onChange={e => setPassword(e.target.value)}

            ></input>
            <input
              className="signup-input"
              type="password"
              size="15"
              placeholder="Confirm-password"
              value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}

            ></input>
            <div className="signup-checkbox-sec">
              <input type="checkbox" className="signup-checkbox" 
              value={isMentor} onChange={e => setIsMentor(e.target.checked)}
              />
              <div className="signup-checkbox-text">Register me as a mentor</div>
            </div>

            <input className="signup-submit" type="submit" value="Sign Up" />
          </form>
          
        </div>
        <div className="signup-login-text">
          Already have an account? <Link to="/login">Login</Link>
          </div>
      </div>
    </div>
  );
};

export default Signup;
