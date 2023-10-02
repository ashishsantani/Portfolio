import React from 'react'
import "./Footerstyles.css";
import {FaPhone,FaHome,FaMailBulk,FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return(
    <div className="footer">
        <div className="footer-container">
          <div className="left1">
             <div className="location">
                <FaHome className="home-icon" size={20} style={{color:"white",marginRight:"2rem"}} />
                <div>
                  <p>A 204 Surya Flats</p>
                  <p>India</p>
                </div>
             </div>
             <div className="phone">
                <h4 className="phoneicon"><FaPhone className="phone-icon" size={20} style={{color:"white",marginRight:"2rem"}} /> +91-9408284318</h4>
             </div>
             <div className="gmail">
                <h4 className="gmailicon"><FaMailBulk className="mail-icon" size={20} style={{color:"white",marginRight:"2rem"}} />ashu@gmail.com</h4>
             </div>
          </div>
          <div className="right1">
                <h4> About the Company </h4>
                <p className="para">This is me Ashish Santani, CEO and Founder of Ashish Creations. I Enjoy making Responsive and Attractive Websites.</p>
                <div className="social">
                   <FaFacebook className="facebook-icon" size={30} style={{color:"white",marginRight:"1rem"}} />
                   <FaInstagram className="instagram-icon" size={30} style={{color:"white",marginRight:"1rem"}} />
                   <FaLinkedin className="linkedin-icon" size={30} style={{color:"white",marginRight:"1rem"}} />
                </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;