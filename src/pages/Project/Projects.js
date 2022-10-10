import React from "react";
import "../Project/Project.css";

// import { Fade } from "react-awesome-reveal";
function Projects() {
    return (
        <div>
            <section className="project-section" id="projects">
                <div className="project-div-main">
                    <h1 className="section-heading">My Recent Works</h1>
                    <div className="project-div">
                        {/* <a href="https://delbingeorge.github.io/clonenetflix" className="one netflix-div">
                            Netflix
                        </a>
                        <a href="https://delbingeorge.github.io/clonespotify/" className="one spotify-div">
                            Spotify
                        </a>
                        <a href="https://shoped.netlify.app/" className="one shoped-div">
                            Shoped
                        </a> */}
                        <a href="https://delbingeorge.github.io/clonenetflix">
                            <img
                                src="https://assets-global.website-files.com/5a1c1b26b1b09d00019565c0/5fb7bf6ee331134d8be1d276_I-netflix.svg"
                                alt="Netflix Logo"
                            />
                        </a>
                        <a href="https://delbingeorge.github.io/clonespotify">
                            <img
                                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png"
                                alt="Netflix Logo"
                            />
                        </a>
                        <a href="https://shoped.netlify.app">
                            <img
                                src="https://shoped.netlify.app/static/media/shopedLogo.1b6b0921c0a29ca872a8.png"
                                alt="Netflix Logo"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
