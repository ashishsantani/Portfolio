import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2"
import Form from "../components/Form";
const contact = () => {
  return (
  <div>
     <Navbar />
     <HeroImg2 heading="Contact" text="Talk to the Enthusiastic Problem Solver"/>
     <Form />
     <Footer />
  </div>
  )
}

export default contact;