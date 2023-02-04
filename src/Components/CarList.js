import React from "react";
import CarCard from "./CarCard";

// this component lists all the cars by their title only. when a car is clicked, it's
// isCompared attribute becomes true and it is added to the comparedCars container
// this component is visible when comparing cars or when adding a car, but not when the comments are displayed
function CarList({ cars, compareCar }) {
    const carComponents = cars.map(car => 
        <CarCard
            key={car.id}
            car={car}
            detailView={false}
            handleClick={() => compareCar(car.id)}
        />)

    return (
        <div className="car-list">
            <h3>Click cars to compare</h3>
            {carComponents}
        </div>
    )
}

export default CarList;
