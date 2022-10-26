import React from "react";
import Resume from "../Hero/DelbinGeorge.pdf";

import "../Footer/Footer.css";

function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="overlay-div" id="contact">
                    <h1>Start a project!</h1>
                    <p>
                        Interested in working together? We should queue
                        <br></br>up a time to chat.
                        {/* I'll buy the coffee. */}
                    </p>
                    <a href="https://www.linkedin.com/in/delbingeorge/" className="overlay-btn">
                        Let's do this!
                    </a>
                </div>
                <div className="footer-div-items">
                    <div className="foot-action-btn-div">
                        <a className="foot-item-link" href={Resume} download="Delbin George.pdf">
                            résumé
                        </a>
                        <a href="https://www.linkedin.com/in/delbingeorge/">go to linkedin</a>

                        <a href="https://www.twitter.com/dellbingeorge/">see my tweets</a>
                        <a href="https://www.github.com/delbingeorge">go to github</a>
                    </div>
                </div>
                <hr></hr>
                <div className="creator-info-div">
                    <p>&#169; | Handcrafted by DB</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
