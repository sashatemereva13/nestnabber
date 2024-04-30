import React, { useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import "./PasswordReset.css";

const PasswordReset2 = () => {
  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Navigation />
      <Hero heroText="Password Reset" />
      <div className="passwordResetDiv">
        <form className="passwordResetForm">
          <div className="formRow">
            <label htmlFor="password"> New password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="formRow">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset2;
