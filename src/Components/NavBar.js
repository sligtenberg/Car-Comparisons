import React from "react";

function NavBar({ setViewMode }) {
    return (
        <div id="nav-bar">
            <button onClick={() => setViewMode("/view_cars")}>View Cars</button>
            <button onClick={() => setViewMode("/add_car")}>Add Car</button>
            <button onClick={() => setViewMode("/TBD")}>TBD</button>
        </div>
    )
}

export default NavBar;
