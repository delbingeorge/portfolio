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
                <h1 className="section-heading">Skills</h1>
                <div className="skill-div-main">
                    <div className="skill-div">
                        <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
                        <FontAwesomeIcon className="skill-icon" icon={faCss3} />
                        <FontAwesomeIcon className="skill-icon" icon={faJs} />
                        <FontAwesomeIcon className="skill-icon" icon={faGitAlt} />
                        <FontAwesomeIcon className="skill-icon" icon={faReact} />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="tailwind" />
                        <img
                            src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
                            alt="next js"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
