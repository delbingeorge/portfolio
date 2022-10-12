import React from "react";
import "../Awards/Awards.css";

import medalImg from "../../media/images/medal.png";
import { Link } from "react-scroll";

function Achieve() {
    return (
        <div id="achievements">
            <section className="awards-section">
                <div className="awards-div-main">
                    <h1 className="section-heading">Achievements</h1>
                    <div className="awards-div">
                        <Link to="firstcertificate" spy={true} smooth={true} offset={10} duration={1950} className="award">
                            <img alt="" src={medalImg}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <h2>[ Inter Class ]</h2>
                            <p>Champion</p>
                        </Link>
                        <Link to="secondcertificate" spy={true} smooth={true} offset={10} duration={1950} className="award">
                            <img alt="" src={medalImg}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <h2>[ Inter College ]</h2>
                            <p>Runner Up</p>
                        </Link>
                        <Link to="thirdcertificate" spy={true} smooth={true} offset={10} duration={1950} className="award">
                            <img alt="" src={medalImg}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <h2>[ Inter Class ]</h2>
                            <p>Champion</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Achieve;
