import React from "react";
import Banner from "../../components/Banner";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>My-Portfolio || Home</title>
      </Helmet>
      <Banner />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
