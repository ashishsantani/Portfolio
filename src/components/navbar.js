import React,{useState} from "react";
import "./navbarstyles.css"
import {Link} from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click,setClick] = useState(false);
    const handleChange = () => {
      setClick(!click);
    }
    const [color,setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >=100){
        setColor(true);
      }else{
        setColor(false);
      }
    };
    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar" }>
        <Link to="/">
          <h1 className="portfolioSize"> Portfolio.</h1>
        </Link >
        <ul className={click ? "nav-menu active" : "nav-menu"} >

            <li >
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link  to="/contact">Contact</Link>
            </li>         
        </ul>
        <div className = "hamburger hamburgerSize" onClick={handleChange} >
            {click ?
            <FaTimes
            size={40}
            style={{color:"white"}}
            /> :
            <FaBars
            size={40}
            style={{color:"white"}}
            />}

        </div>

    </div>
  );
}

export default Navbar;
