import '../index.css';
import React, { useState } from "react";
import Header from "./Header";
import NavBar from './NavBar';
import ViewCars from './ViewCars';
import AddCar from './AddCar';

function App() {
    const [viewMode, setViewMode] = useState("/view_cars")

    function addNewCarToDOM(newCar) {
      console.log(newCar)
    }

    // switch between components
    function viewModeControl() {
      switch(viewMode) {
        case "/view_cars": return <ViewCars />
        case "/add_car": return <AddCar addNewCarToDOM={addNewCarToDOM}/>
        // case "/add_car": return <TBD />
      }
    }

  return (
    <div>
      <Header />
      <NavBar setViewMode={setViewMode}/>
      {viewModeControl()}
    </div>
  );
}

export default App;
