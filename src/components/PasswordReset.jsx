import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";
import "./PasswordReset.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {};
  return (
    <div>
      <Navigation />
      <Hero heroText="Password Reset" />
      <div className="passwordResetDiv">
        <form className="passwordResetForm">
          <div className="formRow">
            <label htmlFor="email"> Your email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="formRow">
            <Link to="/passwordreset2">
              <button onClick={handleSubmit}>Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
