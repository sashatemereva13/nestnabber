import React from "react";
import "./Hero.css";
import heroNestNabber from "../imgs/heroNestNabber.jpg";

const Hero = ({ heroText, heroText2, heroTextSearch }) => {
  return (
    <div className="hero">
      <img className="heroImg" src={heroNestNabber} />
      <div className="yellowLayer"></div>
      <p className="heroText">{heroText}</p>
      <p className="heroText2">{heroText2}</p>
      <p className="heroTextSearch">{heroTextSearch}</p>
    </div>
  );
};

export default Hero;
