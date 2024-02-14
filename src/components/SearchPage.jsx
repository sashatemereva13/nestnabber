import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./SearchPage.css";

import advertPic from "../imgs/advertPic.svg";

const SearchPage = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputText = searchParams.get("query");
  return (
    <div className="searchPage">
      <Navigation />
      <Hero heroText="Search Results for" heroTextSearch={inputText} />
      <div className="searchResultsDiv">
        <Link to="/advertpage" onClick={handleClick}>
          <div className="searchResult">
            <div>
              <img src={advertPic} />
            </div>
            <div>
              <p>Rent pcm</p>
              <p> Number of Beds</p>
              <p>Address</p>
            </div>
          </div>
        </Link>
        <Link to="/advertpage" onClick={handleClick}>
          <div className="searchResult">
            <div>
              <img src={advertPic} />
            </div>
            <div>
              <p>Rent pcm</p>
              <p> Number of Beds</p>
              <p>Address</p>
            </div>
          </div>
        </Link>
        <Link to="/advertpage" onClick={handleClick}>
          <div className="searchResult">
            <div>
              <img src={advertPic} />
            </div>
            <div>
              <p>Rent pcm</p>
              <p> Number of Beds</p>
              <p>Address</p>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
