import {Link} from "react-router-dom";
import "./HeroImgStyles.css";
import "../index.css"
import home from "./images/home.png"
import React from 'react';
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="introImg" src={home} alt="introimg"/>
        </div>
        <div className="content">
           <p className="small-heading">HI, I'M A FREELANCER.</p>
           <h1 className="big-heading"><span class="span1">Full-Stack</span> <br></br> <span>Developer.</span></h1>
           <div className="buttons">
             <Link to="/project" className="btn btn1"> projects </Link>
             <Link to="/contact" className="btn btn-light btn-light1"> contact </Link>
           </div>
        </div>
    </div>
  );
}

export default HeroImg;