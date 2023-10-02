import React from 'react';
import {Link} from "react-router-dom";
import "./project1.css";
import PropTypes from "prop-types";
import "../index.css";

const Project1 = (props) => {
  return (
        <div className="card">
          <h3>- {props.subscription} -</h3>
          <span className="bar">{props.content}</span>
          <p className="heading">{props.pricing}</p>
          <p>- {props.days} -</p>
          <p>- {props.pages} -</p>
          <p>- {props.section} -</p>
          <p>- {props.design} -</p>
          <Link to="/contact" className="btn btn2">{props.button}</Link>
        </div>
 )
}

export default Project1;
Project1.propTypes = {
  design:PropTypes.string
}
Project1.defaultProps = {
  design:"My Design"
}