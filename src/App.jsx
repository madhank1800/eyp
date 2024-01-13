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
import PrivateRoute from "./components/PrivateRoute/privateRoute";
//import dashboard from "./components/Dashboard/dashboard";
import Dashboard from "./components/Dashboard/dashboard";
//import { AppBar, Toolbar } from "@mui/material";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Set isAuthenticated to true after successful sign-in
    setIsAuthenticated(true);
      console.log(isAuthenticated);
  }
    console.log(isAuthenticated);

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
    element={<SignIn onSignIn={handleSignIn} />}
  />
  <Route
    path="/dashboard"
    element={<PrivateRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />}/>
      </Routes>
    </Router>

  );
};

export default App;
