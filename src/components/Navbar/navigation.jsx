import React, { useState } from "react";
import logo from "../../assests/images/eyp03.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { Popover } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
//import  { Typography} from "@mui/material";
import JsonData from "../../data/data.json";
// import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Dropdown, Space } from "antd";

const useStyles = makeStyles((theme) => ({
  menuStyle: {
    // backgroundColor: 'blue',
    // color: 'white',
    // padding: theme.spacing(1, 2),
    // borderRadius: theme.spacing(0.5),
    // '&:hover': {
    //   backgroundColor: 'darkblue',
    // },
  },
}));

const items= [
  {
    key: "1",
    type: "",
    label: "Technology Services",
    children: [
      {
        key: "1-1",
        label: "Testing Services",
      },
      {
        key: "1-2",
        label: "Data Engineering Services",
      },
      {
        key: "1-1",
        label: "Fullstack",
      },
      {
        key: "1-2",
        label: "Machine Learning Services",
      },
      {
        key: "1-1",
        label: "IT Staffing",
      },
      {
        key: "1-2",
        label: "Artificial Intelligence Services",
      },
      {
        key: "1-2",
        label: "Power BI Services",
      },
    ],
  },
  {
    key: "2",
    label: "Engineering services and featured competencies",
    children: [
      {
        key: "2-1",
        label: "Digital Product Engineering",
      },
      {
        key: "2-2",
        label: "Web Design and Development",
      },
      {
        key: "2-1",
        label: "Business Intelligence     ",
      },
      {
        key: "2-2",
        label: "Mobile App Development",
      },
      {
        key: "2-1",
        label: "Cloud Computing",
      },
      {
        key: "2-2",
        label: "Product Design",
      },
      {
        key: "2-2",
        label: "Enterprise Software Development",
      },
      {
        key: "2-2",
        label: "DevOps",
      },
      {
        key: "2-2",
        label: "Awards and recongnition",
      },
    ],
  },
];

export const Navigation = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const data = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const token = localStorage.getItem("token");
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

            <img src={logo} alt="logo" width={70} />
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            {/* {token == null ? ( */}
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/" className="page-scroll">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                {/* <a
                    className="page-scroll"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onMouseOver={handleClick}
                    // onMouseLeave={handleClose}
                  >
                    Services
                  </a> */}
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()} >
                    <Space>Services</Space>
                  </a>
                </Dropdown>
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
                {" "}
                <Link to={{ pathname: "/signin", state: JsonData }}>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        className={classes.menuStyle}
        // open={Boolean(anchorEl)}
        onClose={handleClose}
        // onMouseOut={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Grid container spacing={2}></Grid>
        <MenuItem onClick={handleClose}>Testing Services</MenuItem>
        <MenuItem onClick={handleClose}>Azure Services</MenuItem>
        <MenuItem onClick={handleClose}>Data Engineering Services</MenuItem>
        <MenuItem onClick={handleClose}>Full Stack</MenuItem>
        <MenuItem onClick={handleClose}>Devops Services</MenuItem>
        <MenuItem onClick={handleClose}>Machine Learning Services</MenuItem>
        <MenuItem onClick={handleClose}>IT Staffing</MenuItem>
        <MenuItem onClick={handleClose}>Artificial Intelligence</MenuItem>
        <MenuItem onClick={handleClose}>Power BI services</MenuItem>
      </Menu>
    </>
  );
};
