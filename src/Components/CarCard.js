import React from "react";
import CarDetails from "./CarDetails";

function CarCard({ car, handleClick, detailView, updateCar }) {
    // this function tells the component wether we should render the details or not.
    const details = () => detailView ? <CarDetails car={car} updateCar={updateCar}/> : null

    return (
        <div >
            <div className="car" onClick={handleClick}>{car.make} {car.model}</div>
            <div className="details">{details()}</div>
        </div>
      );
    }

export default CarCard;
