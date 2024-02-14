import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Footer from "./Footer";
import axios from "axios";
import uploadIcon from "../imgs/uploadIcon.svg";
import "./Advertise.css";

const Advertise = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("");
  const [numOfRooms, setNumOfRooms] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [rent, setRent] = useState("");

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleNumOfRooms = (event) => {
    setNumOfRooms(event.target.value);
  };

  const handleCityTown = (event) => {
    setCityTown(event.target.value);
  };

  const handleStreetName = (event) => {
    setStreetName(event.target.value);
  };

  const handlePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const handleOccupation = (event) => {
    setOccupation(event.target.value);
  };

  const handleRent = (event) => {
    setRent(event.target.value);
  };

  function handleMultipleChange(event) {
    setFiles([...event.target.files]);
  }

  function handleMultipleSubmit(event) {
    event.preventDefault();
    const url = "https://localhost:5173/advertise";
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFiles(response.data.files);

        setDescription("");
        setNumOfRooms("");
        setCityTown("");
        setStreetName("");
        setPostcode("");
        setOccupation("");
        setRent("");
      })
      .catch((error) => {
        console.log("Error uploading files: ", error);
        setError("File upload failed. Please try again.");
      });
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navigation />
      <Hero heroText="Advertise!" />
      <div className="advertiseMain">
        <div className="manageAndEditButtons">
          <Link
            to="/manageadverts"
            className="manageAdvertsLink"
            onClick={handleClick}
          >
            <button> Manage My Adverts</button>
          </Link>
          <Link to="/editaccount" onClick={handleClick}>
            <button> Edit My Account</button>
          </Link>
        </div>
        <form className="advertiseForm" onSubmit={handleMultipleSubmit}>
          <div className="formColumn1">
            <label htmlFor="uploadInput">
              <img src={uploadIcon} alt="Upload icon" />
              <p> Upload Photographs</p>
            </label>

            <input
              type="file"
              id="uploadInput"
              onChange={handleMultipleChange}
              multiple
            />
            <div>
              <p> Description</p>
              <textarea
                type="text"
                value={description}
                onChange={handleDescription}
                required
                rows="10"
              />
            </div>
          </div>
          <div className="formColumn3">
            <div className="formRow">
              <p>Number of Rooms Available</p>
              <input
                type="text"
                value={numOfRooms}
                onChange={handleNumOfRooms}
                required
              />
            </div>

            <div className="formRow">
              <p>City/Town</p>
              <input
                type="text"
                value={cityTown}
                onChange={handleCityTown}
                required
              />
            </div>

            <div className="formRow">
              <p>Street Name</p>
              <input
                type="text"
                value={streetName}
                onChange={handleStreetName}
                required
              />
            </div>

            <div className="formRow">
              <p>PostCode</p>
              <input
                type="text"
                value={postcode}
                onChange={handlePostcode}
                required
              />
            </div>

            <div className="formRow">
              <p>Occupation (Landlord/Tennant)</p>
              <input
                type="text"
                value={occupation}
                onChange={handleOccupation}
                required
              />
            </div>

            <div className="formRow">
              <p>Rent pcm</p>
              <input type="text" value={rent} onChange={handleRent} required />
            </div>
          </div>
          <button type="submit">Publish</button>
        </form>
        {uploadedFiles.map((file, index) => (
          <img key={index} src={file} alt={`Uploaded content ${index}`} />
        ))}
        {error && <p className="error-message">Error: {error}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Advertise;
