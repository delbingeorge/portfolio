import React from "react";
import navLogo from "../media/images/Logo.png";
function Nav() {
    return (
        <div>
            <nav>
                <img className="nav-section-alink" src={navLogo} alt="Delbin Logo"></img>
            </nav>
        </div>
    );
}
export default Nav;
