import React from "react";
import MySelf from "../components/MySelf/MySelf";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";

function Home() {
  return (
    <>
      <MySelf />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;
