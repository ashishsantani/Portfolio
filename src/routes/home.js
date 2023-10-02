import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer.js";
import HeroImg from "../components/HeroImg";
const home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <Footer />
    </div>
  )
}

export default home;