import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "../Works/Works.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Works() {
    return (
        <div>
            <section className="work-section" id="projects">
                <div className="work-div-main">
                    <h1 className="section-heading">My Recent Works</h1>
                    <div className="work-div">
                        <div className="work">
                            <div>
                                <ul>
                                    <li className="work-title">Portfolio</li>
                                    <li className="work-des">personal project</li>
                                </ul>
                                <a href="https://www.delb.in" className="work-link">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </a>
                                <a href="https://github.com/delbingeorge/portfolio" className="work-link">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <div>
                                <ul>
                                    <li className="work-title">Shoped</li>
                                    <li className="work-des">E-commerce Theme</li>
                                </ul>
                                <a href="https://shoped.netlify.app" className="work-link">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </a>
                                <a href="https://github.com/delbingeorge/shoped" className="work-link">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <div>
                                <ul>
                                    <li className="work-title">Spotify</li>
                                    <li className="work-des">Clone Project</li>
                                </ul>
                                <a href="https://delbingeorge.github.io/clonespotify/" className="work-link">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </a>
                                <a href="https://github.com/delbingeorge/clonespotify" className="work-link">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <div>
                                <ul>
                                    <li className="work-title">Netflix</li>
                                    <li className="work-des">Clone Project</li>
                                </ul>
                                <a href="https://delbingeorge.github.io/clonenetflix/" className="work-link">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </a>
                                <a href="https://github.com/delbingeorge/clonenetflix" className="work-link">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Works;
