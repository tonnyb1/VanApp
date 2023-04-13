import React from "react";
import logo from "../assets/logo.png";

export default function Nav() {
    return (
        <nav className="navbar">
            <img src={logo} alt= 'vanlogo' className="logo" />
            <ul className="nav-links">
                <li>About</li>
                <li>Vans</li>
            </ul>
        </nav>
    );
}