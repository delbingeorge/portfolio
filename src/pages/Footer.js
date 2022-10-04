import React from "react";
import { Link } from "react-scroll";
function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="overlay-div" id="contact">
                    <h1>Start a project!</h1>
                    <p>
                        Interested in working together? We should queue <br></br>up a time to chat. I'll buy the coffee.
                    </p>
                    <a href="https://www.linkedin.com/in/delbingeorge/" className="overlay-btn">
                        Let's do this!
                    </a>
                </div>
                <div className="footer-div-items">
                    <div className="foot-action-btn-div">
                        <Link className="foot-item-link" to="aboutme" spy={true} smooth={true} offset={10} duration={1950}>
                            know more about me
                        </Link>
                        <a href="https://www.linkedin.com/in/delbingeorge/">go to linkedin</a>
                        <a href="https://www.twitter.com/dellbingeorge/">see my tweets</a>
                        <Link className="foot-item-link" to="projects" spy={true} smooth={true} offset={10} duration={1950}>
                            see my projects
                        </Link>
                        <a href="https://www.github.com/delbingeorge">go to github</a>
                    </div>
                </div>
                <div className="creator-info-div">
                    <p>Handcrafted by DB</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
