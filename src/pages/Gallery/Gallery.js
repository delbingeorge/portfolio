import React from "react";
import "../Awards/Awards.css";

function Gallery() {
    return (
        <div>
            <section className="gallery-section" id="firstcertificate">
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
        </div>
    );
}

export default Gallery;
