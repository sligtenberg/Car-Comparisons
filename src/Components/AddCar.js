import React from "react";

function AddCar({ addNewCarToDOM }) {
    function handleAddCarSubmit(event) {
        event.preventDefault()

        const newCar = {
            make: event.target[0].value, 
            model: event.target[1].value,
            year: parseInt(event.target[2].value),
            miles: parseInt(event.target[3].value),
            notes: event.target[4].value,
            isCompared: false
          }
      
        fetch("http://localhost:3001/cars", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCar)
        })
          .then(r => r.json())
        }

    return (
        <form id="add-car-form" onSubmit={handleAddCarSubmit}>
            <table><tbody>
                <tr><td>Make: </td><td><input></input></td></tr>
                <tr><td>Model: </td><td><input></input></td></tr>
                <tr><td>Year: </td><td><input ></input></td></tr>
                <tr><td>Miles: </td><td><input ></input></td></tr>
                <tr><td>Notes: </td><td><textarea></textarea></td></tr>
            </tbody></table>
            <button>Add car</button>
        </form>
    )
}

export default AddCar;
