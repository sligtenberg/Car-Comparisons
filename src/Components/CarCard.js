import React from "react";
import CarDetails from "./CarDetails";

function CarCard({ car, handleClick, detailView, updateNotes }) {
    const details = () => {
        return detailView ? <CarDetails car={car} updateNotes={updateNotes}/> : null
    }
    
    return (
        <div >
            <div class="car" onClick={handleClick}>{car.make} {car.model}</div>
            <div class="details">{details()}</div>
        </div>
      );
    }

export default CarCard;
