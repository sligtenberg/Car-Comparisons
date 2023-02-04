import React, { useState, useEffect } from "react";
import Filter from './Filter';
import AllCarContainer from './AllCarContainer';
import ComparisonContainer from './ComparisonContainer';

function ViewCars() {
    const [cars, setCars] = useState([])
    const [carFilter, setCarFilter] = useState({
      miles: {min: "", max: ""},
      year: {min: "", max: ""},
      make: "",
      model: ""
    })

    // populate the main car container with all the cars
    useEffect(() => {
        fetch('http://localhost:3001/cars')
        .then(r => r.json())
        .then(setCars)
    }, [])

    // comparedCars filters the cas down to the ones that are flagged for comparison
    const comparedCars = cars.filter(car => car.isCompared ? true : false)

    const filteredCars = cars.filter(car => 
        // conditions for which must be met for the car to be displayed
        (carFilter.miles.min === "" || car.miles >= carFilter.miles.min) &&
        (carFilter.miles.max === "" || car.miles <= carFilter.miles.max) &&
        (carFilter.year.min  === "" || car.year  >= carFilter.year.min) &&
        (carFilter.year.max  === "" || car.year  <= carFilter.year.max) &&
        (carFilter.make      === "" || car.make.toLowerCase().includes(carFilter.make.toLowerCase())) &&
        (carFilter.model     === "" || car.model.toLowerCase().includes(carFilter.model.toLowerCase()))
      ? true : false)

    // this function flags a car for comparison. does not persist to the server
    function compareCar(carToCompareId) {
      setCars(cars.map(car => {
        if (car.id === carToCompareId) car.isCompared = true
        return car
      }))
    }

    // this function removes a car from the comparison container. does not persist to server
    function unCompareCar(carToUncompareId) {
      setCars(cars.map(car => {
        if (car.id === carToUncompareId) car.isCompared = false 
        return car
      }))
    }

    // update the notes on the frontend without refreshing
    function updateCar(updatedCar) {
      console.log(updatedCar)
      setCars(cars.map(car => car.id === updatedCar.id ? updatedCar : car))
    }

    return (
        <div>
            <Filter carFilter={carFilter} setCarFilter={setCarFilter}/>
            <div id="main-container">
              <AllCarContainer cars={filteredCars} compareCar={compareCar}/>
              <ComparisonContainer
                unCompareCar={unCompareCar}
                comparedCars={comparedCars}
                updateCar={updateCar}
              />
            </div>
        </div>
    )
}

export default ViewCars;
