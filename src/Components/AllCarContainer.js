import React from "react";
import CarCard from "./CarCard";

function AllCarContainer({ allCars, compareCar }) {
    const carComponents = allCars.map(car => 
        <CarCard
            key={car.id}
            car={car}
            handleClick={() => compareCar(car)}
        />)

    return (
        <div>
            <h2>All Cars</h2>
            {carComponents}
        </div>
    )
}

export default AllCarContainer;
