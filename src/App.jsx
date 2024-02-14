import { React, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./HomePage.css";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import advertImg from "./imgs/houseAndKey.svg";
import Footer from "./components/Footer.jsx";

function App() {
  const handleSubmit = (event) => {
    if (!inputText.trim()) {
      event.preventDefault();
      alert("Please fill out the search field.");
    } else {
      window.scrollTo(0, 0);
    }
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <div className="fullPage">
        <Navigation />
        <div className="yourNextHomeOneClickAway">
          <Hero heroText="Your Next Home," heroText2="One Click Away..." />
        </div>
        <div className="searchBarContainer">
          <div className="searchBarDiv">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              value={inputText}
              variant="outlined"
              fullWidth
              label="Search by postcode or area"
              className="searchBar"
              required
            />
            <Link
              to={`/searchresults?query=${inputText}`}
              onClick={handleSubmit}
            >
              <Button variant="contained" color="primary">
                Search
              </Button>
            </Link>
          </div>
        </div>
        <Link to="/advertise" onClick={handleClick}>
          <div className="advertContainer">
            <p className="advertText"> Got a room? Post an Ad!</p>
            <img src={advertImg} className="advertImg" />
          </div>
        </Link>
        <div className="aboutUsContainer">
          <h2> Our Mission</h2>
          <p>
            At Nest Nabber, we're a student-run website with a simple mission:
            to make finding your ideal accomodation a straightforward task. We
            understand the challenges of house hunting, especially in today's
            fast-paced world. That's why we've created an easy-to-use platfom,
            prioritizing simplicity for a hassle-free experience.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
