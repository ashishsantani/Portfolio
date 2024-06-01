import React from 'react'
import "./Footerstyles.css";
import { Link } from "react-router-dom"
import { FaPhone, FaHome, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-container">
            <div className="left1">
               <div className="location">
                  <FaHome className="home-icon" size={22} style={{ color: "white", marginRight: "1rem" }} />
                  <div>
                     <p>Surat Gujarat</p>
                     <p>India</p>
                  </div>
               </div>
               <div className="phone">
                  <h4 className="phoneicon"><FaPhone className="phone-icon" size={22} style={{ color: "white", marginRight: "1rem" }} /> +91-9408284318</h4>
               </div>
               <div className="gmail">
                  <h4 className="gmailicon"><FaMailBulk className="mail-icon" size={22} style={{ color: "white", marginRight: "1rem" }} />ashu@gmail.com</h4>
               </div>
            </div>
            <div className="right1">
               <h4> About the Company </h4>
               <p className="para">This is me Ashish Santani, CEO and Founder of Ashish Creations. Im a versatile and skilled professional who is proficient in both frontend and backend web development.</p>
               <div className="social">
                  <Link to="https://github.com/ashishraja" target="_blank" >
                     <FaGithub className="facebook-icon" size={30} style={{ color: "white", marginRight: "1rem" }} />
                  </Link>
                  <Link to="https://www.linkedin.com/in/ashish-santani-148b98237" target="_blank" >
                     <FaLinkedin className="linkedin-icon" size={30} style={{ color: "white", marginRight: "1rem" }} />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer;