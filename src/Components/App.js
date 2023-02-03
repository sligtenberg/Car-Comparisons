import '../index.css';
import React, { useState } from "react";
import Header from "./Header";
import NavBar from './NavBar';
import ViewCars from './ViewCars';

function App() {
    const [viewMode, setViewMode] = useState("/view_cars")

    // switch between components
    function viewModeControl() {
      switch(viewMode) {
        case "/view_cars":
          return <ViewCars />
        // case "/add_car":
        //   return (

        //   )
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
