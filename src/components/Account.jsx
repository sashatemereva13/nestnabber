import React from "react";
import Navigation from "./Navigation";

const Account = () => {
  return (
    <div>
      <Navigation />
      <div className="editAccountContainer">
        <p>First Name</p>
        <p>Last Name</p>
        <p>Email</p>
        <p>Phone Number</p>
        <p>Password</p>
        <button className="link">Confirm</button>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
