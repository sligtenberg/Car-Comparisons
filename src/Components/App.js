import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import ViewCars from './ViewCars';
import AddCar from './AddCar';
import Comments from "./Comments";

function App() {

  return (
    <div>
      <h1>Stevo's Car Database</h1>
      <NavBar />
      <Switch>
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
      </Switch>
    </div>
  )
}

export default App;
