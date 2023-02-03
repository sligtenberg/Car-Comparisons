import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from './NavBar';
import ViewCars from './ViewCars';
import AddCar from './AddCar';

function App() {
    const [viewMode, setViewMode] = useState("/view_cars")

    // switch between components
    // function viewModeControl() {
    //   switch(viewMode) {
    //     case "/view_cars": return <ViewCars />
    //     case "/add_car": return <AddCar />
    //     // case "/add_car": return <TBD />
    //     default: return <h1>404 not found</h1>
    //   }
    // }

  return (
    <div>
      <Header />
      <NavBar setViewMode={setViewMode}/>
      {/* {viewModeControl()} */}
      <Switch>
        <Route path="/view_cars">
          <ViewCars />
        </Route>
        <Route path="/add_car">
          <AddCar />
        </Route>
        <Route exact path="/">
          <ViewCars />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
