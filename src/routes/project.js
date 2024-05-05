import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Project1 from "../components/project1";
import WorkCard from "../components/WorkCard";
import "../components/project1.css";
import items from "../components/PricingArray";
import workitems from "../components/Workarray";
const createCard = (item,ind) => {
  return (
    <Project1
    key={ind}
    subscription={item.subscription}
    content={item.content}
    pricing={item.pricing}
    days={item.days}
    pages={item.pages}
    section={item.section}
    design={item.design}
    button={item.button} 
    />
  )
}
const createWorkCard = (workitem,ind) => {
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
const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="projects" text="Some of my most recent works." />
      <div>
          <h1 className="headingDiv"> Projects </h1>
          <div className="work-container">
            {workitems.map(createWorkCard)}
          </div>
      </div>
      <div>
        <h1 className="headingDiv headingDiv1">Pricing</h1>
        <div className="pricing">
          <div className="card-container">
            {items.map(createCard)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Project;