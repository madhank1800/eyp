import React from "react";
import "./styles.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          
        </div>
        <div className="row">
          {props.data ? (
            <Slider {...settings}>
              {" "}
              {props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p style={{ textAlign: "justify" }}>{d.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};
export default Services;
