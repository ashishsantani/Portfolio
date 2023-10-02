import React from 'react'
import "./Myskills.css";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs } from "react-icons/bi";
const Myskills = () => {
    return (
        <div className="main-container">
            <h1 className="main-heading"><span class="heading-span">My <span> Skills </span></span></h1>
            <div className="container">
                <div className="left-part">
                    <div className="myskills-heading">
                        <h1>
                            Technical Skills
                        </h1>
                        <div className="bar"></div>
                    </div>
                    <div className="icons">
                        <div className="icon1">
                            <BiLogoHtml5 color="red" />
                            <div className="info">
                                HTML
                            </div>
                            <div className="bars html">
                                <span></span>
                            </div>
                        </div>
                        <div className="icon1">
                            <BiLogoCss3 color="blue" />
                            <div className="info">
                                CSS
                            </div>
                            <div className="bars css">
                                <span></span>
                            </div>
                        </div>
                        <div className="icon1">
                            <BiLogoJavascript color="yellow" />
                            <div className="info">
                                Javascript
                            </div>
                            <div className="bars javascript">
                                <span></span>
                            </div>
                        </div>
                        <div className="icon1">
                            <BiLogoNodejs color="green" />
                            <div className="info">
                                Nodejs
                            </div>
                            <div className="bars nodejs">
                                <span></span>
                            </div>
                        </div>
                        <div className="icon1">
                            <SiMongodb color="green" />
                            <div className="info">
                                MongoDB
                            </div>
                            <div className="bars mongodb">
                                <span></span>
                            </div>
                        </div>
                        <div className="icon1">
                            <FaReact color="#61dafb" />
                            <div className="info">
                                React
                            </div>
                            <div className="bars react">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-part">
                    <div className="myskills-heading">
                        <h1>
                            Professional Skills
                        </h1>
                        <div className="bar"></div>
                    </div>
                    <div className="div1">
                        <div className="loader">
                            <div className="ring Communication">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <span className="text">78%</span>
                            </div>
                            <div className="loading-text">Communication<div className="skills" >Skills</div></div>
                        </div>
                        <div className="loader">
                            <div className="ring Problem-Solving">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <span className="text">85%</span>
                            </div>
                            <div className="loading-text">Problem Solving</div>
                        </div>
                        <div className="loader">
                            <div className="ring Teaching-Skills">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <span className="text">70%</span>
                            </div>
                            <div className="loading-text">Teaching <div className="skills" >Skills</div> </div>
                        </div>
                    </div>
                    <div className="div2">
                        <div className="loader">
                            <div className="ring Team-Work">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <span className="text">90%</span>
                            </div>
                            <div class="loading-text">Team Work</div>
                        </div>
                        <div className="loader">
                            <div className="ring AI-Tools">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <span className="text">70%</span>
                            </div>
                            <div className="loading-text">AI Tools</div>
                        </div>
                        <div className="loader">
                            <div className="ring Time-Managment">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <span className="text">70%</span>
                            </div>
                            <div className="loading-text">Time Manag.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myskills;