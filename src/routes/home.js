import React from 'react';
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="Full-Stack Developer specializing in MERN stack development. Creating modern, responsive web applications with exceptional user experience."
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects limit={3} />
      </main>
      <Footer />
    </>
  );
};

export default Home;