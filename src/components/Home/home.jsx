import React, { useState, useEffect } from "react";
import { Header } from "../Navbar/header";
import { Features } from "../Features/features";
import { About } from "../About/about";
import  Services  from "../Services/services";
import { Industries } from "../Industries/industries";
import { Testimonials } from "../Testimonals/testimonials";
import { Team } from "../Team/Team";
import { Contact } from "../Contact/contact";
import JsonData from "../../data/data.json";
import { Navigation } from "../Navbar/navigation";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Industries data={landingPageData.Industries} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};
export default Home;
