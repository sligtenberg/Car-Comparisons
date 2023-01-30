import React from "react";
import CarDetails from "./CarDetails";

function CarCard({ car, handleClick, detailView }) {
    const details = () => {
        return detailView ? <CarDetails car={car}/> : null
    }

    return (
        <div >
          <div className="card">
            <div className="card-body">
              <h4 className="card-title" onClick={handleClick}>{car.make} {car.model}</h4>
              <div className="card-text">{details()}</div>
            </div>
          </div>
        </div>
      );
    }

export default CarCard;
