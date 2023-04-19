import React from "react";
import { Link } from "react-router-dom";
import UserCircle from "../assets/images/userCircle.png"

export default function Nav() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
            <Link to="/host">Host</Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
            <Link to="/login"><img src={UserCircle}></img></Link>
            </nav>
        </header>
    )
}