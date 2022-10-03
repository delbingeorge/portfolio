import React from "react";
import Fade from "react-reveal/Fade";

function Projects() {
    return (
        <div>
            <section className="project-section" id="projects">
                <Fade bottom cascade duration={2940} delay={50} damping={1}>
                    <div className="project-div-main">
                        <h1 className="section-heading">My Recent Works</h1>
                        <div className="project-div">
                            <a href="https://delbingeorge.github.io/clonenetflix" className="one netflix-div">
                                Netflix
                            </a>
                            <a href="https://delbingeorge.github.io/clonespotify/" className="one spotify-div">
                                Spotify
                            </a>
                            <a href="https://shoped.netlify.app/" className="one shoped-div">
                                Shoped
                            </a>
                            {/* <div className="one bitdrag-div">
                            <a href="https://bitdragon.netlify.app/">Bitdrag</a>
                        </div> */}
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
}

export default Projects;
