import React from "react";
import { Link } from "react-scroll";

import "../Hero/Hero.css";
import Image3D from "../../media/images/db3done.png";
import Resume from "../Hero/DelbinGeorge.pdf";

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
                        <span>that inspire!</span>
                    </h1>
                    <div className="action-btn-div">
                        <Link
                            to="aboutme"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1050}
                        >
                            about me
                        </Link>
                        <a href={Resume} download="Delbin George.pdf" className="action-btn-div-alink">
                            résumé
                        </a>
                        <Link
                            to="projects"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1050}
                        >
                            see my projects
                        </Link>
                        <a
                            href="https://delbingeorge.medium.com/"
                            
                            className="action-btn-div-alink"
                        >
                           read my article
                        </a>
                        {/* <Link
                            to="contact"
                            className="action-btn-div-alink"
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={1050}
                        >
                            work together
                        </Link> */}
                    </div>
                </div>
                <img className="icon-3d" src={Image3D} alt="3d icon "></img>
            </section>
        </div>
    );
}

export default Hero;
