import React from "react";
import "../Awards/Awards.css";

function Gallery() {
    return (
        <div>
            <section className="gallery-section">
                <div className="gallery-div">
                    <div className="gallery" id="firstcertificate">
                        <div className="gallery-img "></div>
                        <div className="gallery-content">
                            <h1 className="gallery-content-head">St. Aloysius College (Autonomous)</h1>
                            <p className="gallery-content-para">
                                TECH-IT-OUT, IT Fest conducted by BCA Department on 20th May 2022.
                            </p>
                        </div>
                    </div>
                    <div className="gallery" id="secondcertificate">
                        <div className="gallery-img img-one"></div>
                        <div className="gallery-content">
                            <h1 className="gallery-content-head">St. Joseph Engineering College</h1>
                            <p className="gallery-content-para">
                                Joshiana IT Fest by MCA Department of St.Joseph on 7th Sept 2022.
                            </p>
                        </div>
                    </div>
                    <div className="gallery" id="thirdcertificate">
                        <div className="gallery-img img-three"></div>
                        <div className="gallery-content">
                            <h1 className="gallery-content-head">St. Aloysius College (Autonomous)</h1>
                            <p className="gallery-content-para">
                                TECHNOPHILIA, IT Fest conducted by BCA Department on 21th April 2022.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
