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
                            Hey, I'm entry-level front-end developer who loves to build and maintain web pages. Seeking for
                            new opportunities and challenges that will expand my skill set. Most proud of my "shoped." an
                            e-commerce website design which is surely different from other websites.
                            {/*and also i'm proud of my "Site Name" where you can easily learn the very basics of web design.  */}
                            My passion lies in designing frontend, i am currently doing BCA as my degree at St.Aloysius
                            (Autonomous) College. 
                            {/* hjf */}
                            
                            I'm probably not the typical designer positioned behind an Illustrator
                            artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and
                            contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user
                            experiences while staying fashionable.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
