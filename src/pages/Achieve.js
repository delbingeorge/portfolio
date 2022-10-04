import React from "react";
import { Fade } from "react-awesome-reveal";
import certificateOne from "../media/images/certificateOne.jpg";
import certificateTwo from "../media/images/certificateThree.jpg";
import certificateThree from "../media/images/certificateTwo.jpg";

function Achieve() {
    return (
        <div id="achievements">
            <section className="achievements-section">
                <Fade cascade duration={9000}>
                    <div className="achievements-div-main">
                        <h1 className="section-heading"> My Achievements</h1>
                        <div className="achievements-div">
                            {/* <div className="achievements-galley"></div> */}
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
                </Fade>
            </section>
        </div>
    );
}

export default Achieve;
