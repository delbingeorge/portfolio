import React from "react";
import { Link } from "react-scroll";
function Main() {
    return (
        <div>
            <section className="hero-section">
                <div className="container-div">
                    <h1 className="hero-section-hone">
                        Hi, I'm<br></br>
                        <span className="hero-section-hone-span">Del</span>
                        bin<br></br>George
                    </h1>
                    <div className="action-btn-div">
                        <Link
                            to="aboutme"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1950}
                        >
                            about me
                        </Link>
                        <Link
                            to="projects"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1950}
                        >
                            see my projects
                        </Link>

                        <Link
                            to="achievements"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1950}
                        >
                            my achievements
                        </Link>
                        <Link
                            to="contact"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1950}
                        >
                            work together
                        </Link>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
