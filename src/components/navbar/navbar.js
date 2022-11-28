import React from "react";
import "./navbar.css"
function Navbar(){
    return(
        <nav className="navbar">
            <img className="navbar--logo" src="./images/logo192.png" alt="react-logo"></img>
            <h2 className="navbar--title">Lyrics Match!</h2>
        </nav>
    )
}

export default Navbar;