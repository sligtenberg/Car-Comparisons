import React from "react";
import CarCard from "./CarCard";

// this component lists all the cars by their title only. when a car is clicked, it's
// isCompared attribute becomes true and it is added to the comparedCars container
function AllCarContainer({ cars, compareCar }) {
    const carComponents = cars.map(car => 
        <CarCard
            key={car.id}
            car={car}
            detailView={false}
            handleClick={() => compareCar(car.id)}
        />)

    return (
        <div id="all-car-container">
            <h2>Click cars to compare</h2>
            {carComponents}
        </div>
    )
}

export default AllCarContainer;
