import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Education from "./components/Education"
import VideoGallery from "./components/VideoGallery"
import CampusSection from "./components/CampusSection"
import Footer from "./components/Footer";
import NewEvent from "./components/NewEvent"
import Testimonial from "./components/Testimonial"
import VisitSection from "./components/VisitSection";
import Program from "./components/Program";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Hero/>
        <Feature/>
        <Education/>
        <Program/>
        <VideoGallery/>
        <CampusSection/>
        <NewEvent/>
        <Testimonial/>
        <VisitSection/>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
