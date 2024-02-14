import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import logoNestNabber from "../imgs/logoNestNabberFooter.svg";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footerFirstRow">
        <Link to="/aboutus" onClick={handleClick}>
          <p className="footerLink"> About Us</p>
        </Link>
        <div className="needAHand">
          <p> Need a Hand?</p>
          <a className="footerLink" href="mailto:nestnabber02@gmail.com">
            Contact Us: <div>nestnabber02@gmail.com</div>
          </a>
        </div>
        <Link to="/termsofservice" onClick={handleClick}>
          <p className="footerLink"> Terms & PrivacyPolicy</p>
        </Link>
      </div>
      <div className="footerSecondRow">
        <img className="logoImgFooter" src={logoNestNabber} />
      </div>
    </div>
  );
};
export default Footer;
