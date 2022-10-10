import React from "react";
import { Link } from "react-scroll";

import "../Hero/Hero.css";
import Image3D from "../../media/images/db3done.png";

function Hero() {
    return (
        <div>
            <section className="hero-section">
                <div className="container-div">
                    <h1 className="hero-section-hone">
                        <span>turning ideas into </span> <br></br>
                        <span>creative </span>
                        <span className="landing-header-gradient">websites</span>
                        <br></br>
                        <span>that inspires!</span>
                    </h1>

                    <div className="action-btn-div">
                        <Link
                            to="aboutme"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={2050}
                        >
                            about me
                        </Link>
                        <Link
                            to="contact"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1950}
                        >
                            resume
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
                <img className="icon-3d" src={Image3D} alt="3d icon "></img>
            </section>
        </div>
    );
}

export default Hero;
