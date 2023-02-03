import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setViewMode }) {
    return (
        <nav id="nav-bar">
            <Link to="/">View Cars</Link>
            <Link to="/add_car">Add Car</Link>
            <Link to="/TBD">TBD</Link>

            {/* <button onClick={() => setViewMode("/view_cars")}>View Cars</button>
            <button onClick={() => setViewMode("/add_car")}>Add Car</button>
            <button onClick={() => setViewMode("/TBD")}>TBD</button> */}
        </nav>
    )
}

export default NavBar;
