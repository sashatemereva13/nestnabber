import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./AdvertPage.css";
import advertPictureHolder from "../imgs/advertPictureHolder.svg";
import advertDescriptionHolder from "../imgs/advertDescriptionHolder.svg";
import personPhoto from "../imgs/personPhoto.svg";

const AdvertPage = () => {
  return (
    <div>
      <Navigation />
      <div className="yellowDivider"></div>
      <div className="advertBody">
        <div className="advertImgDescription">
          <img src={advertPictureHolder} />
          <img src={advertDescriptionHolder} />
        </div>
        <div className="advertDetails">
          <p>Number of Rooms Available</p>
          <p>City/Town</p>
          <p>Street Name</p>
          <p>First Half of Postcode</p>
          <p>Occupation (Landlord/Tenant)</p>
          <p>Rent pcm</p>
        </div>
        <div className="advertContact">
          <img src={personPhoto} />
          <p>Contact</p>
          <p>Email</p>
          <p>Phone</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdvertPage;
