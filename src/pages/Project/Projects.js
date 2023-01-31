import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import "../Project/Project.css";

function Projects() {
    return (
        <div>
            <section className="project-section" id="projects">
                <div className="project-div-main">
                    <h1 className="section-heading">My Recent Works</h1>
                    <div className="project-div">
                        <div href="https://www.delb.in" className="project">
                            <h1>
                                My portfolio <br></br>website
                            </h1>
                            <div className="project-action-div">
                                <a href="https://delb.in" className="project-div-button">
                                    VIEW
                                </a>
                                <a href="https://github.com/delbingeorge/portfolio" className="project-github">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <h1>
                                Simple <br></br> Netflix Clone
                            </h1>
                            <div className="project-action-div">
                                <a href="https://delbingeorge.github.io/clonenetflix/" className="project-div-button">
                                    VIEW
                                </a>
                                <a href="https://github.com/delbingeorge/clonenetflix" className="project-github">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <h1>
                                Simple <br></br>Spotify Clone
                            </h1>
                            <div className="project-action-div">
                                <a href="https://delbingeorge.github.io/clonespotify/" className="project-div-button">
                                    VIEW
                                </a>
                                <a href="https://github.com/delbingeorge/clonespotify" className="project-github">
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

export default Projects;
