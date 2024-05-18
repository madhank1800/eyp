import React from "react";
import "./styles.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6  col-xs-12 intro-text">
                <h1
                 className="headerTitle"
                >
                  <span className="text-span">Accelerate </span>
                  {props.data?.title}
                </h1>
                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                <a
                  href="#"
                  className="btn btn-custom  page-scroll btnres"
                  style={{ display: "flex", width: " 200px" }}
                >
                  Learn More
                </a>{" "}
              </div>
              <div className="col-md-6 col-xs-12 image-container"  >
              <img src="img/home.png" className="img-responsive" alt="" height={"40vh"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
