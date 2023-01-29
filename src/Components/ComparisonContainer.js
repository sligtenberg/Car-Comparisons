import React from "react";
import CarCard from "./CarCard";

function ComparisonContainer({ comparedCars, unCompareCar }) {
    const carComponents = comparedCars.map(car => 
        <CarCard
            key={car.id}
            car={car}
            detailView={true}
            handleClick={() => unCompareCar(car)}
        />)

    return (
        <div>
            <h2>Compare Cars</h2>
            {carComponents}
        </div>
    )
}

export default ComparisonContainer;
