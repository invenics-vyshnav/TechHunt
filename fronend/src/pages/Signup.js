import React from "react";
import "./styles/signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
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
          <form className="signup-form">
            <input
              className="signup-input"
              type="text"
              size="15"
              placeholder="Full Name"
            ></input>
            <input
              className="signup-input"
              type="text"
              size="15"
              placeholder="Username"
            ></input>
            <input
              className="signup-input"
              type="email"
              size="15"
              placeholder="Email ID"
            ></input>
            <input
              className="signup-input"
              type="password"
              size="15"
              placeholder="Password"
            ></input>
            <input
              className="signup-input"
              type="password"
              size="15"
              placeholder="Confirm-password"
            ></input>
            <div className="signup-checkbox-sec">
              <input type="checkbox" className="signup-checkbox" />
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
