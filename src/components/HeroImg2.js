
import "./HeroImg2styles.css";
import React from 'react';
import img2 from "./images/background-img.png"
const HeroImg2 = (props) => {
  return (
    <div className="hero2">
        <div className="mask2">
          <img className="introImg2" src={img2} alt="introimg"/>
        </div>
        <div className="content">
           <h1 className="bigHeading">{props.heading}</h1>
           <div className="smallHeading">
             <p>{props.text}</p>
           </div>
        </div>
    </div>
  );
}

export default HeroImg2;