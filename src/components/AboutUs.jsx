import React from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import "./AboutUs.css";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Navigation />
      <Hero heroText="About Us" />
      <div className="aboutUsText">
        <p>
          At Nest Nabber, our mission is straightforward: we aim to simplify the
          process of finding your perfect flat or home. We recognise the
          challenges that come with searching for a place to live, particularly
          in todays fats-paced world where time is precious. To address this,
          we've developed a user-friendly platfom that placessimplicity at the
          forefront.
        </p>

        <p>
          Founded in 2024 by a student who understands the struggles of finding
          accomodatino, Nest Nabber is here to streamline your search for a flat
          or home. Out easy-to-use platform allows you to effortlessly browse
          listings, connect with potential flatmates, and secure your ideal
          space without any unnecessary complications. Join us for a stress-free
          and straightworward way to find your perfect home!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
