import React from "react";

function CarCard({ car, handleClick }) {
    return (
        <div onClick={handleClick}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{car.make} {car.model}</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      );
    }

export default CarCard;