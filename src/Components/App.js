import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Filter from "./Filter";
import CarList from "./CarList";
import ComparisonContainer from './ComparisonContainer';
import AddCar from "./AddCar";


import ViewCars from './ViewCars';
import Comments from "./Comments";

function App() {
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
      <h1>Stevo's Car Database</h1>
      <NavBar />
      <Filter carFilter={carFilter} setCarFilter={setCarFilter}/>
      <Switch>
        <Route path="/compare_cars">
          <div className="main-container">
            <CarList cars={filteredCars} compareCar={compareCar}/>
            <ComparisonContainer unCompareCar={unCompareCar} comparedCars={comparedCars} updateCar={updateCar}/>
          </div>
        </Route>
        <Route path="/add_car">
          <div className="main-container">
            <CarList cars={filteredCars} compareCar={compareCar}/>
            <AddCar />
          </div>
        </Route> 
        <Route path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
        <div className="main-container">
            <CarList cars={filteredCars} compareCar={compareCar}/>
            <ComparisonContainer unCompareCar={unCompareCar} comparedCars={comparedCars} updateCar={updateCar}/>
          </div>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>

      </Switch>
      {/* <Switch>
        <Route path="/view_cars">
          <ViewCars />
        </Route>
        <Route path="/add_car">
          <AddCar />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
          <ViewCars />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch> */}
    </div>
  )
}

export default App;
