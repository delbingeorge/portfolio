import React from "react";
import "../Awards/Awards.css";

import firstplacemedal from "../../media/images/medal.png";
import { Link } from "react-router-dom";

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
                            <h2>[ Inter Class ]</h2>
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
                            <h2>[ Inter College ]</h2>
                            <p>Runner Up</p>
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
                            <h2>[ Inter Class ]</h2>
                            <p>Champion</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="gallery-div">
                    <div className="gallery-img "></div>
                    <div className="gallery-content">
                        <h1>St. Aloysius College (Autonomous)</h1>
                        <p>TECH-IT-OUT was a IT Fest conducted by BCA Department on 20th May 2022.</p>
                    </div>
                </div>
                <div className="gallery-div">
                    <div className="gallery-content">
                        <h1>St. Joseph Engineering College</h1>
                        <p>Joshiana IT Fest conducted by MCA Department of St.Joseph on 7th Sept 22.</p>
                    </div>
                    <div className="gallery-img img-one"></div>
                </div>
                <div className="gallery-div">
                    <div className="gallery-img img-three"></div>
                    <div className="gallery-content">
                        <h1>St. Aloysius College (Autonomous)</h1>
                        <p>TECHNOPHILIA was a IT Fest conducted by BCA Department on 21th April 2022.</p>
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
