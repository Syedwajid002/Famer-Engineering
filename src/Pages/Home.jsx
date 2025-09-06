import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
