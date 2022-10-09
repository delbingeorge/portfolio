import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../About/About.css";

function About() {
    return (
        <div id="aboutme">
            <section className="about-section">
                <div className="about-div">
                    <div className="about-content">
                        <div className="content-head">
                            <h1>Delbin George</h1>
                            <div className="head-icon">
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://www.google.com">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <p>
                                My name is <span class="name-span">Delbin George</span> and I'm from India, I'm a designer,
                                not the one who sits behind an Illustrator art board adjusting pixels, but I can design,
                                design beautiful and seamless user interactive websites also i enjoys a lot doing all these
                                stuffs. Seeking new opportunities and challenges that will expand my skill set.
                            </p>
                        </div>
                    </div>
                    <div className="about-img"></div>
                </div>
            </section>
        </div>
    );
}

export default About;
