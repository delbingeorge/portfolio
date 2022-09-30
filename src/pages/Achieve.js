import React from "react";
import certificateOne from "../media/images/certificateOne.jpg";
import certificateTwo from "../media/images/certificateThree.jpg";
import certificateThree from "../media/images/certificateTwo.jpg";

function Achieve() {
    return (
        <div id="achievements">
            <section className="achievements-section">
                <div className="achievements-div-main">
                    <h1 className="section-heading"> My Achievements</h1>
                    <div className="achievements-div">
                        <div className="achievements-galley"></div>
                        <div className="certificate-div">
                            <img src={certificateOne} alt="Delbin George Web Design Competition Certificate"></img>
                            <h1>St.Joseph Engineering College</h1>
                            <h3>Web Designing Competition [DORTWEB]</h3>
                            <h4>Nation Level</h4>
                        </div>
                        <div className="certificate-div">
                            <img src={certificateTwo} alt="Delbin George Web Design Competition Certificate"></img>
                            <h1>St.Aloysius (Autonomous) College</h1>
                            <h3>Web Designing Competition [404 Web Designing]</h3>
                        </div>
                        <div className="certificate-div">
                            <img src={certificateThree} alt="Delbin George Web Design Competition Certificate"></img>
                            <h1>St.Aloysius (Autonomous) College</h1>
                            <h3>Web Designing Competition [Technophilia]</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Achieve;
