import React from "react";
import Fade from "react-reveal/Fade";
function Skills() {
    return (
        <div>
            <section className="my-skills">
                <Fade bottom cascade duration={2940} delay={50} damping={1}>
                    <div className="skill-div-main">
                        <h1 className="section-heading">My Skills & Knowledge</h1>
                        <div className="skill-div">
                            <div className="skill-div-items">HTML</div>
                            <div className="skill-div-items">CSS</div>
                            {/* <div className="skill-div-items"></div> */}
                            <div className="skill-div-items">JavaScript</div>
                            <div className="skill-div-items">React JS</div>
                            <div className="skill-div-items">Git </div>
                            {/* <div className="skill-div-items">Creative Cloud</div> */}
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
}

export default Skills;
