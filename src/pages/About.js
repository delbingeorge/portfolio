import React from "react";

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
                            My name is Delbin George I'm from India, I'm probably not the typical designer positioned behind
                            an Illustrator art board adjusting pixels, but I design. I'm an entry-level front-end developer
                            who loves to build and maintain web pages designs stylish user interfaces that inspires!. Seeking
                            for new opportunities and challenges that will expand my skill set. I am currently doing BCA.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
