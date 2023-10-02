import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Myskills from "../components/Myskills"
const about = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="Im a friendly Full-Stack Developer. "/>
      <AboutContent />
      <Myskills />
      <Footer />
    </div>
  )
}

export default about;