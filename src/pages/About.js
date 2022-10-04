import React from "react";
import { Fade } from "react-awesome-reveal";

import proImg from "../media/images/proImg.jpg";
function About() {
    return (
        <div id="aboutme">
            <section className="about-section">
                <Fade cascade>
                    <div className="about-div">
                        <div className="about-section-img">
                            <img src={proImg} alt="Delbin George Portfolio "></img>
                        </div>
                        <div className="about-section-content">
                            <h1 className="section-heading">Designer, Frontend Developer & Self learner</h1>
                            <p>
                                My name is Delbin George I'm from India, I'm a designer not the one who sits behind an
                                Illustrator art board adjusting pixels, but I can design beautiful and seamless user
                                interactive websites. My passion is to build and maintain web pages. Seeking new opportunities
                                and challenges that will expand my skill set.
                            </p>
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
}

export default About;
