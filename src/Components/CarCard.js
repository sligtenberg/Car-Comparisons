import React from "react";
import CarDetails from "./CarDetails";

function CarCard({ car, handleClick, detailView, updateNotes }) {
    // this function tells the component wether we should render the details or not.
    const details = () => detailView ? <CarDetails car={car} updateNotes={updateNotes}/> : null

    return (
        <div >
            <div class="car" onClick={handleClick}>{car.make} {car.model}</div>
            <div class="details">{details()}</div>
        </div>
      );
    }

export default CarCard;
