//import logo from '../logo.svg';
//import '../App.css';
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Filter from './Filter';
import AllCarContainer from './AllCarContainer';
import ComparisonContainer from './ComparisonContainer';

function App() {
    const [allCars, setAllCars] = useState([])
    const [comparedCars, setComparedCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/cars')
        .then(r => r.json())
        .then(setAllCars)
    }, [])

    function compareCar(CarToCompare) {
      if (!comparedCars.includes(CarToCompare)) setComparedCars([...comparedCars, CarToCompare])
    }

    function unCompareCar(carToUncompare) {
      setComparedCars(comparedCars.filter(car => car.id === carToUncompare.id ? false : true))
    }

  return (
    <div>
      <Header />
      <Filter />
      <div className="row">
        <div className="col-8">
          <AllCarContainer allCars={allCars} compareCar={compareCar}/>
        </div>
        <div className="col-4">
          <ComparisonContainer comparedCars={comparedCars} unCompareCar={unCompareCar}/>
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
