import React from "react";
import CarCard from "./CarCard";

// this contains only cars that are currently being compared
function ComparisonContainer({ unCompareCar, comparedCars, updateNotes }) {
    const carComponents = comparedCars.map(car => 
        <CarCard
            key={car.id}
            car={car}
            detailView={true}
            handleClick={() => unCompareCar(car.id)}
            updateNotes={updateNotes}
        />)

    return (
        <div id="conparison-container">
            <h3>Click make and model to remove</h3>
            <div id="side-by-side">{carComponents}</div>
        </div>
    )
}

export default ComparisonContainer;
