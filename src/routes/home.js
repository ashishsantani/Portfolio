import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer.js";
import HeroImg from "../components/HeroImg";
import featuredItems from '../components/FeaturedProjects';
import WorkCard from '../components/WorkCard';

const createWorkCard = (workitem, ind) => {
  return (
    <WorkCard
      key={workitem.id}
      imgsrc={workitem.imgsrc}
      title={workitem.title}
      icons={workitem.icons}
      content={workitem.content}
      viewbtn={workitem.viewbtn}
      sourcebtn={workitem.sourcebtn}
    />
  )
}

const home = () => {
  return (
    <div className='home-featured-projects'>
      <Navbar />
      <HeroImg />
      <div className='home-featured-div'>
        <h1 className="headingDiv"> Featured Projects </h1>
        <div className="work-container">
          {featuredItems.map(createWorkCard)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default home;