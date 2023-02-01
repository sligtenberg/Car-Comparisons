//import logo from '../logo.svg';
//import '../App.css';
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Filter from './Filter';
import AllCarContainer from './AllCarContainer';
import ComparisonContainer from './ComparisonContainer';

function App() {
    const [cars, setCars] = useState([])

    // populate the main car container with all the cars
    useEffect(() => {
        fetch('http://localhost:3001/cars')
        .then(r => r.json())
        .then(setCars)
    }, [])

    // comparedCars filters the cas down to the ones that are flagged for comparison
    const comparedCars = cars.filter(car => car.isCompared ? true : false)

    // this function flags a car for comparison. does not persist to the server
    function compareCar(carToCompare) {
      carToCompare.isCompared = true
      setCars(cars.map(car => car.id === carToCompare.id ? carToCompare : car))
    }

    // this function removes a car from the comparison container. does not persist to server
    function unCompareCar(carToUncompare) {
      carToUncompare.isCompared = false
      setCars(cars.map(car => car.id === carToUncompare.id ? carToUncompare : car))
    }

  return (
    <div>
      <Header />
      <Filter />
      <div className="row">
        <div className="col-8">
          <AllCarContainer cars={cars} compareCar={compareCar}/>
        </div>
        <div className="col-4">
          <ComparisonContainer unCompareCar={unCompareCar} comparedCars={comparedCars}/>
        </div>
      </div>
    </div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

  );
}

export default App;
