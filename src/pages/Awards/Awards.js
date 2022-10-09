import React, { useState } from "react";
import "../Awards/Awards.css";

// import certificateOne from "../../media/images/certificateOne.jpg";
// import certificateTwo from "../../media/images/certificateThree.jpg";
// import certificateThree from "../../media/images/certificateTwo.jpg";

import firstplacemedal from "../../media/images/medalo.png";
import { Link, Route, Routes } from "react-router-dom";
import CertificateOne from "../Certificate/CertificateOne";

function Achieve() {
    return (
        <div id="achievements">
            <section className="awards-section">
                <div className="awards-div-main">
                    <h1 className="section-heading">Achievements</h1>
                    <div className="awards-div">
                        <Link to="first-certificate" className="award cerone">
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
            <Routes>
                <Route path="first-certificate" element={<CertificateOne />}></Route>
            </Routes>
        </div>
    );
}

export default Achieve;
