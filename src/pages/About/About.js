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
                            <h1>
                                Designer, Developer & <br></br> Self learner
                            </h1>
                            {/* <div className="head-icon">
                                <a href="https://twitter.com/dellbingeorge">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://linkedin.com/in/delbingeorge">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://www.github.com/delbingeorge">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div> */}
                            <p>
                                My name is <span className="name-span">Delbin George</span>, and I'm from India. I'm a
                                designer—not the one who sits behind an Illustrator art board tweaking pixels, but the one who
                                can design beautiful and seamless user-interactive websites. I also enjoy a lot doing all
                                these things. Seeking new opportunities and challenges that will expand my skill set.
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
