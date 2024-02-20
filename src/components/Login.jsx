import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Navigation from "./Navigation";
import "./Login.css";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Navigation />
      <Hero heroText="Welcome Back!" />

      <div className="loginFormDiv">
        <form className="loginForm">
          <div className="formRow">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="formRow">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <Link to="/passwordreset" className="forgotPasswordLink">
            <p className="link">Forgot your password?</p>
          </Link>
          <div className="formRow">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
