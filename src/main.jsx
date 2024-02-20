import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import AboutUs from "./components/AboutUs.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Advertise from "./components/Advertise.jsx";
import AdvertPage from "./components/AdvertPage.jsx";
import SearchPage from "./components/SearchPage.jsx";
import TermsOfService from "./components/TermsOfService.jsx";
import ManageAdverts from "./components/ManageAdverts.jsx";
import EditAccount from "./components/EditAccount.jsx";
import PasswordReset from "./components/PasswordReset.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/advertpage" element={<AdvertPage />} />
        <Route path="/searchresults" element={<SearchPage />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/manageadverts" element={<ManageAdverts />} />
        <Route path="/editaccount" element={<EditAccount />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
