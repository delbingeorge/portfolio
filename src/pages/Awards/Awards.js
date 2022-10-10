import React from "react";
import "../Awards/Awards.css";

import firstplacemedal from "../../media/images/medalo.png";
import { Link } from "react-router-dom";
// import CertificateOne from "../Certificate/CertificateOne";

function Achieve() {
    return (
        <div id="achievements">
            <section className="awards-section">
                <div className="awards-div-main">
                    <h1 className="section-heading">Achievements</h1>
                    <div className="awards-div">
                        <Link
                            to="first-certificate"
                            // href="https://drive.google.com/file/d/1n-OhXUBs_FH95A0WYx7XtA2Ateiy3rqK/view?usp=sharing"
                            // target="_blank"
                            className="award"
                        >
                            <img alt="" src={firstplacemedal}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <p>Champion</p>
                        </Link>
                        <Link
                            to="first-certificate"
                            // href="https://drive.google.com/file/d/1XU6V_7JT5T_0xGy-NgR5H1v0Iyw8pkYU/view?usp=sharing"
                            // target="_blank"
                            className="award"
                        >
                            <img alt="" src={firstplacemedal}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <p>Runners Up</p>
                        </Link>
                        <Link
                            to="first-certificate"
                            // href="https://drive.google.com/file/d/17cVp2eH7UMEKPDvbx5oCp4YF_W2mFg-z/view?usp=sharing"
                            // target="_blank"
                            className="award"
                        >
                            <img alt="" src={firstplacemedal}></img>
                            <h1>
                                Web Designing <br></br>Competition
                            </h1>
                            <p>Champion</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <Routes>
                <Route path="first-certificate" element={<CertificateOne />}></Route>
            </Routes> */}
        </div>
    );
}

export default Achieve;
