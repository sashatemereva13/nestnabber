import React from "react";
import logoNestNabber from "../imgs/logoNestNabber.svg";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navBar">
      <div className="logoContainer">
        <img className="logoImg" src={logoNestNabber} />
      </div>
      <div className="linksContainer">
        <Link to="/">
          <p className="link"> Home</p>
        </Link>
        <Link to="/register">
          <p className="link"> Register</p>
        </Link>
        <Link to="/login">
          <p className="link">Log In</p>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
