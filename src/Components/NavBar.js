import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav id="nav-bar">
            <Link to="/compare_cars">Compare Cars</Link>
            <Link to="/add_car">Add Car</Link>
            <Link to="/comments">Comments</Link>
        </nav>
    )
}

export default NavBar;
