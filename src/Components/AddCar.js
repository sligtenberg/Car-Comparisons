import React, { useState } from "react";

function AddCar() {
    const [newCar, setNewCar] = useState({isCompared: false})

    function handleFormChange(event) {
        setNewCar({...newCar, [event.target.name]: event.target.value})
        //console.log(newCar)
    }

    // called when user submit a new car
    // posts the new car to the server
    function handleAddCarSubmit() {
        // event.preventDefault()
        // const newCar = {
        //     make: event.target[0].value, 
        //     model: event.target[1].value,
        //     year: parseInt(event.target[2].value),
        //     miles: parseInt(event.target[3].value),
        //     notes: event.target[4].value,
        //     isCompared: false
        // }
      
        fetch("http://localhost:3001/cars", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCar)
        })
        console.log(newCar)
    }

    return (
        <form id="add-car-form" onSubmit={handleAddCarSubmit} onChange={event => handleFormChange(event)}>
            <table><tbody>
                <tr><td>Make:</ td><td><input    type="text"   name="make" ></input   ></td></tr>
                <tr><td>Model:</td><td><input    type="text"   name="model"></input   ></td></tr>
                <tr><td>Year:</ td><td><input    type="number" name="year" ></input   ></td></tr>
                <tr><td>Miles:</td><td><input    type="number" name="miles"></input   ></td></tr>
                <tr><td>Notes:</td><td><textarea type="text"   name="notes"></textarea></td></tr>
            </tbody></table>
            <button>Add car</button>
        </form>
    )
}

export default AddCar;
