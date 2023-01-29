import React from "react";

function CarDetails({ car }) {
    return (
        <div>
            <p>Year: {car.year}</p>
            <p>Miles: {car.miles}</p>
        </div>
    )
}

export default CarDetails;
