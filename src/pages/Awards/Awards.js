import React from "react";
import "../Awards/Awards.css";

// import certificateOne from "../../media/images/certificateOne.jpg";
// import certificateTwo from "../../media/images/certificateThree.jpg";
// import certificateThree from "../../media/images/certificateTwo.jpg";

import firstplacemedal from "../../media/images/medal.png";
import { Link } from "react-router-dom";

function Achieve() {
    return (
        <div id="achievements">
            {/* <section className="achievements-section">
                <div className="achievements-div-main">
                    <h1 className="section-heading"> My Achievements</h1>
                    <div className="achievements-div">
                        <div className="certificate-div">
                            <img src={certificateOne} alt="Delbin George Web Design Competition Certificate"></img>
                            <h1 className="certificate-head">St.Joseph Engineering College</h1>
                            <h3 className="certificate-head-two">Web Designing Competition [DORTWEB]</h3>
                        </div>
                        <div className="certificate-div">
                            <img src={certificateTwo} alt="Delbin George Web Design Competition Certificate"></img>
                            <h1 className="certificate-head">St.Aloysius (Autonomous) College</h1>
                            <h3 className="certificate-head-two">Web Designing Competition [404 Web Designing]</h3>
                        </div>
                        <div className="certificate-div">
                            <img src={certificateThree} alt="Delbin George Web Design Competition Certificate"></img>
                            <h1 className="certificate-head">St.Aloysius (Autonomous) College</h1>
                            <h3 className="certificate-head-two">Web Designing Competition [Technophilia]</h3>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="awards-section">
                <div className="awards-div-main">
                    <h1 className="section-heading">Achievements</h1>
                    <div className="awards-div">
                        <Link to="" className="award cerone">
                            <img alt="" src={firstplacemedal}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <p>Runners Up</p>
                        </Link>
                        <Link to="" className="award certwo">
                            <img alt="" src={firstplacemedal}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <p>Champion</p>
                        </Link>
                        <Link to="" className="award crethree">
                            <img alt="" src={firstplacemedal}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <p>Champion</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Achieve;
