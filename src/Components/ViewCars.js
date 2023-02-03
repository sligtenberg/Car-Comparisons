import React, { useState, useEffect } from "react";
import Filter from './Filter';
import AllCarContainer from './AllCarContainer';
import ComparisonContainer from './ComparisonContainer';

function ViewCars() {
    const [cars, setCars] = useState([])
    const [milesRange, setMilesRange] = useState({min: "", max: ""})
    const [yearRange, setYearRange] = useState({min: "", max: ""})
    const [makeFilter, setMakeFilter] = useState("")
    const [modelFilter, setModelFilter] = useState("")

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
      (milesRange.min === "" || car.miles >= milesRange.min) &&
      (milesRange.max === "" || car.miles <= milesRange.max) &&
      (yearRange.min === "" || car.year >= yearRange.min) &&
      (yearRange.max === "" || car.year <= yearRange.max) &&
      (makeFilter === "" || car.make.toLowerCase().includes(makeFilter.toLowerCase())) &&
      (modelFilter === "" || car.model.toLowerCase().includes(modelFilter.toLowerCase()))
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
    function updateNotes(carToUpdate) {
      setCars(cars.map(car => car.id === carToUpdate.id ? carToUpdate : car))
    }

    return (
        <div>
            <Filter
              milesRange={milesRange}
              setMilesRange={setMilesRange}
              yearRange={yearRange}
              setYearRange={setYearRange}
              makeFilter={makeFilter}
              setMakeFilter={setMakeFilter}
              modelFilter={modelFilter}
              setModelFilter={setModelFilter}
            />
            <div id="main-container">
              <AllCarContainer cars={filteredCars} compareCar={compareCar}/>
              <ComparisonContainer
                unCompareCar={unCompareCar}
                comparedCars={comparedCars}
                updateNotes={updateNotes}
              />
            </div>
        </div>
    )
}

export default ViewCars;
