import React from "react";
// import { Link } from "react-scroll";

import proImg from "../media/images/proImg.png";
function About() {
    return (
        <div id="aboutme">
            <section className="about-section">
                <div className="about-div">
                    <div className="about-section-img">
                        <img src={proImg} alt="hi"></img>
                    </div>
                    <div className="about-section-content">
                        <h1 className="section-heading">Designer, Frontend Developer & Self learner</h1>
                        <p>
                            Hey, I'm entry-level front-end developer who loves to build and maintain web pages. Seeking for
                            new opportunities and challenges that will expand my skill set. Most proud of my "shoped." an
                            e-commerce website design which is surely different from other websites and also i'm proud of my
                            "Site Name" where you can easily learn the very basics of web design. My passion lies in designing
                            frontend, i am currently doing BCA as my degree at St.Aloysius (Autonomous) College.
                            {/* I'm an aspiring frontend designer who enjoys creating seamless websites and designs, I'm a self 
                            taught developer currently working on React JS and Bootstraps. My passion lies in designing
                            frontend and i am currently doing BCA as my degree. Hi, i am Delbin George from India. I'm a
                            Frontend Developer who has the potential of making this more creative and attractive. I have
                            skills on Web Designing <Link to="achivements">[See Achivements]</Link>. I'm currently working on
                            React JS and Bootstrap */}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
