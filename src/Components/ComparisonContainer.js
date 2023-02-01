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
        <div>
            <h2>Compare Cars</h2>
            {carComponents}
        </div>
    )
}

export default ComparisonContainer;
