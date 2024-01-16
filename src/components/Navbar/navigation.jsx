import React, { useState } from "react";
import logo from "../../assests/images/eyp02.jpeg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { Popover } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
//import  { Typography} from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import JsonData from "../../data/data.json";
import { useSelector } from "react-redux";
// import {Button} from "@mui/material";
//import {Link} from "@mui/material";
export const Navigation = (props) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const token = localStorage.getItem("token");
  console.log(token);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // window.location.href = "/services";
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav
        id="menu"
        className="navbar navbar-default navbar-fixed-top"
        sx={{ backgroundColor: "blue", color: "white" }}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            {/* <a className="navbar-brand page-scroll" href="#page-top">
            React Landing Page
          </a>{" "} */}
            <img src={logo} alt="logo" width={70} />
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="page-scroll"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Services
                </a>
              </li>

              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>

              <li>
                <a href="#industries" className="page-scroll">
                  Industries
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
              <li>
                {token == null ? (
                  <Link to={{ pathname: "/signin", state: JsonData }}>
                    Sign In
                  </Link>
                ) : (
                  <a onClick={handleLogout}>Sign out</a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        // open={Boolean(anchorEl)}
        onClose={handleClose}
        // onMouseOut={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>service 1</MenuItem>
        <MenuItem onClick={handleClose}>service 2</MenuItem>
        <MenuItem onClick={handleClose}>service 3</MenuItem>
        <MenuItem onClick={handleClose}>service 4</MenuItem>
        <MenuItem onClick={handleClose}>service 5</MenuItem>
        <MenuItem onClick={handleClose}>service 6</MenuItem>
      </Menu>
    </>
  );
};
