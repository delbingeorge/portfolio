import React from "react";
import "../Project/Project.css";
// import firstplacemedal from "../../media/images/medal.png";

function Projects() {
    return (
        <div>
            <section className="project-section" id="projects">
                <div className="project-div-main">
                    <h1 className="section-heading">My Recent Works</h1>
                    <div className="project-div">
                        <a href="https://www.google.com" className="project">
                            {/* <img alt="" src={firstplacemedal}></img> */}
                            <h1>
                                Netflix OTT <br></br>React Clone
                            </h1>
                        </a>
                        <a href="https://www.google.com" className="project">
                            {/* <img alt="" src={firstplacemedal}></img> */}
                            <h1>
                                Simple <br></br>Spotify Clone
                            </h1>
                        </a>
                        <a href="https://www.google.com" className="project">
                            {/* <img alt="" src={firstplacemedal}></img> */}
                            <h1>My portfolio</h1>
                        </a>
                        <a href="https://www.google.com" className="project">
                            {/* <img alt="" src={firstplacemedal}></img> */}
                            <h1>
                                Shoped <br></br> E-commerce
                            </h1>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
