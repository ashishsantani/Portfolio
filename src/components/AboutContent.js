import React from 'react';
import {Link} from "react-router-dom";
import "./Aboutcontent.css";
import about1 from "./images/about1.png"
import about2 from "./images/about2.png"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <h3 className="text">Im a Full-Stack MERN Developer. I create responsive and secured websites for my clients. Im  a versatile and skilled professional who is proficient in both front-end and back-end web development. Also Im capable of handling all aspects of web application development, from designing the user interface and user experience to managing server-side logic and databases.</h3>
            <Link to="/contact">
               <button className="btn contactBtn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                  <img className="img image1" src={about2} alt="true" />
                </div>
                <div className="img-stack bottom">
                  <img className="img" src={about1} alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;