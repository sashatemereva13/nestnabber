import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./EditAccount.css";
import Footer from "./Footer";
import profilePicFiller from "../imgs/personPhoto.svg";
import advertImg from "../imgs/houseAndKey.svg";

const EditAccount = () => {
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

  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="fullPage">
      <Navigation />
      <div className="yellowDivider"></div>
      <div className="editAccountDiv">
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
            <button type="submit">Save Changes</button>
          </div>
        </form>
        <div className="profilePictureDiv">
          {profilePic ? (
            <img src={profilePic} alt="Profile" />
          ) : (
            <img src={profilePicFiller} alt="Profile" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: "none" }}
            id="profilePicInput"
          />
          <label htmlFor="profilePicInput">Choose a file</label>
        </div>
      </div>
      <Link to="/advertise">
        <div className="advertContainer">
          <p className="advertText"> Got a room? Post an Ad!</p>
          <img src={advertImg} className="advertImg" />
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default EditAccount;
