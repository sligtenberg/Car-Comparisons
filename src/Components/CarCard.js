import React from "react";
import CarDetails from "./CarDetails";

function CarCard({ car, handleClick, detailView }) {
    const details = () => {
        return detailView ? <CarDetails car={car}/> : null
    }

    return (
        <div onClick={handleClick}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{car.make} {car.model}</h4>
              <p className="card-text">{details()}</p>
            </div>
          </div>
        </div>
      );
    }

export default CarCard;
