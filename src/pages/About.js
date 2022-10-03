import React from "react";
// import { Link } from "react-scroll";

import proImg from "../media/images/proImg.jpg";
function About() {
    return (
        <div id="aboutme">
            <section className="about-section">
                <div className="about-div">
                    <div className="about-section-img">
                        <img src={proImg} alt="Delbin George Portfolio "></img>
                    </div>
                    <div className="about-section-content">
                        <h1 className="section-heading">Designer, Frontend Developer & Self learner</h1>
                        <p>
                            Hey, I'm probably not the typical designer positioned behind an Illustrator art board adjusting
                            pixels, but I design. I'm an entry-level front-end developer who loves to build and maintain web
                            pages. Seeking for new opportunities and challenges that will expand my skill set. I am currently
                            doing BCA.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
