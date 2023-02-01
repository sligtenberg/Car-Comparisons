import React from "react";
import CarCard from "./CarCard";

function AllCarContainer({ cars, compareCar }) {
    const carComponents = cars.map(car => 
        <CarCard
            key={car.id}
            car={car}
            detailView={false}
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
