import React from "react";

function Projects() {
    return (
        <div>
            <section className="project-section" id="projects">
                <div className="project-div-main">
                    <h1 className="section-heading">My Recent Works</h1>
                    <div className="project-div">
                        <div className="one netflix-div">
                            <a href="https://delbingeorge.github.io/clonenetflix">Netflix</a>
                        </div>
                        <div className="one spotify-div">
                            <a href="https://delbingeorge.github.io/clonespotify/">Spotify</a>
                        </div>
                        <div className="one shoped-div">
                            <a href="https://shoped.netlify.app/">Shoped</a>
                        </div>
                        <div className="one bitdrag-div">
                            <a href="https://bitdragon.netlify.app/">Bitdrag</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
