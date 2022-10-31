import React from "react";
import "../Skills/Skills.css";

// import adobePR from "../../media/icons/adobePR.png";
// import adobePS from "../../media/icons/adobePS.png";
// import adobeXD from "../../media/icons/adobeXD.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
// import Tailwind from "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg";
function Skills() {
    return (
        <div>
            <section className="my-skills">
                <div className="skill-div-main">
                    <h1 className="section-heading">
                        My Skills &<br></br> Knowledge
                    </h1>
                    <div className="skill-div">
                        <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
                        <FontAwesomeIcon className="skill-icon" icon={faCss3} />
                        <FontAwesomeIcon className="skill-icon" icon={faJs} />
                        <FontAwesomeIcon className="skill-icon" icon={faReact} />
                        <FontAwesomeIcon className="skill-icon" icon={faGitAlt} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="tailwind" />
                        {/* <FontAwesomeIcon className="skill-icon" icon={faBootstrap} /> */}
                    </div>
                    {/* <div className="skill-div">
                        <img src={adobeXD} alt="" />
                        <img src={adobePS} alt="" />
                        <img src={adobePR} alt="" />
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Skills;
