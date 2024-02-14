import React, { useState } from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import "./Register.css";
import Footer from "./Footer";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
  };
  return (
    <div className="fullPage">
      <Navigation />
      <Hero heroText="Register!" />
      <div className="registerFormDiv">
        <form className="registerForm" onSubmit={handleSubmit}>
          <div className="formRow">
            <label htmlfor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={handleFirstName}
              required
            />
          </div>
          <div className="formRow">
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={handleLastName}
              required
            />
          </div>
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
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumber}
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
          <div className="formRow">
            <button type="submit">Submit</button>
          </div>
        </form>

        <p className="privacyPolicyNote">
          By clicking 'Confirm' you are hereby agreeing to Nest Nabbers Terms
          and Privacy Policy
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
