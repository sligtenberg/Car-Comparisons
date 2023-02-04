import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav id="nav-bar">
            <Link to="/">Compare Cars</Link>
            <Link to="/add_car">Add Car</Link>
            <Link to="/Comments">Comments</Link>
        </nav>
    )
}

export default NavBar;
