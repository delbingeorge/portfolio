import React from "react";
import "../About/About.css";

function About() {
    return (
        <div id="aboutme">
            <section className="about-section">
                <div className="about-div">
                    <div className="about-content">
                        <div className="content-head">
                            <p>
                                My name is <span className="name-span">Delbin George</span>, and I'm from India. I'm a
                                front-end developer with a background in graphic design, I have a unique perspective on
                                creating visually appealing and user-friendly web experiences. I love working with HTML, CSS
                                and JavaScript, and have a strong understanding of responsive design and mobile optimization.
                                I am passionate about staying up-to-date with the latest web development technologies and
                                trends, and am eager to bring my skills and creativity to a new challenge.
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
