import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "../Works/Works.css";

function Works() {
    return (
        <div>
            <section className="work-section" id="projects">
                <h1 className="section-heading">My Recent Works</h1>
                <div className="work-div-main">
                    <div className="work-div">
                        <div className="work">
                            <a href="https://www.delb.in">
                                <ul>
                                    <li className="work-des">
                                        <FontAwesomeIcon className="circle-icon" icon={faCircle} />
                                        <span className="span-head">personal</span> project
                                    </li>
                                    <li className="work-title">
                                        Portfolio<br></br>
                                        <span className="span-title">Website</span>
                                    </li>
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                                </ul>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://juniperedu.netlify.app/">
                                <ul>
                                    <li className="work-des">
                                        <FontAwesomeIcon className="circle-icon" icon={faCircle} />
                                        <span className="span-head">personal</span> project
                                    </li>
                                    <li className="work-title">
                                        Juniper<br></br>
                                        <span className="span-title">Education Website</span>
                                    </li>
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                                </ul>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://nextables.vercel.app">
                                <ul>
                                    <li className="work-des">
                                        <FontAwesomeIcon className="circle-icon" icon={faCircle} />
                                        <span className="span-head">personal</span> project
                                    </li>
                                    <li className="work-title">
                                        Eatables<br></br>
                                        <span className="span-title">Web App</span>
                                    </li>
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                                </ul>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://shoped.netlify.app">
                                <ul>
                                    <li className="work-des">
                                        <FontAwesomeIcon className="circle-icon" icon={faCircle} />
                                        <span className="span-head">personal</span> project
                                    </li>
                                    <li className="work-title">
                                        Shoped<br></br>
                                        <span className="span-title">E-commerce Website</span>
                                    </li>
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                                </ul>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://homemeteo.netlify.app/">
                                <ul>
                                    <li className="work-des">
                                        <FontAwesomeIcon className="circle-icon" icon={faCircle} />
                                        <span className="span-head">personal</span> project
                                    </li>
                                    <li className="work-title">
                                        Meteo<br></br>
                                        <span className="span-title">Weather App</span>
                                    </li>
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                                </ul>
                            </a>
                        </div>
                        <div className="work">
                            <a href="https://dbnetflix.netlify.app/">
                                <ul>
                                    <li className="work-des">
                                        <FontAwesomeIcon className="circle-icon" icon={faCircle} />
                                        <span className="span-head">clone</span> project
                                    </li>
                                    <li className="work-title">
                                        Netflix<br></br>
                                        <span className="span-title">UI Clone</span>
                                    </li>
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Works;
