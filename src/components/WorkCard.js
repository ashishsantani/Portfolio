import React from 'react';
import "./WorkCard.css";
import {Link} from "react-router-dom";
const WorkCard = (props) => {
  return (
        <div className="work">
            <div>
                <img className="WorkImg" src={props.imgsrc} alt="workImg"/>
            </div>
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div> 
            <div className="buttons1">
                  <Link to={props.viewbtn} className="button">View</Link>
                  <Link to={props.sourcebtn} className="button buttonRight">Source</Link>
            </div>           
        </div>
  )
}
export default WorkCard;