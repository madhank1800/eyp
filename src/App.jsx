import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navbar/navigation";
import { Services } from "./components/Services/services";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
//import AppBar from "@mui/material";
//import Toolbar from "@mui/material";
import "./App.css";
// import { Services } from "./components/services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/signin";
import Home from "./components/Home/home";
//import { AppBar, Toolbar } from "@mui/material";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/services" render={(props) => <Services {...props} />} />
        <Route
          path="/signin"
          render={(props) => <SignIn {...props}  />}
          Component={SignIn}
        />
      </Routes>
    </Router>
  );
};

export default App;
