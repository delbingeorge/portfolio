import React from "react";
import { Link } from "react-scroll";
import navLogo from "../media/images/Logo.png";
function Nav() {
    return (
        <div>
            <nav>
                <Link to="">
                    <img className="nav-section-alink" src={navLogo} alt="Delbin Logo"></img>
                </Link>
            </nav>
        </div>
    );
}
export default Nav;
