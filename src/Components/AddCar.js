import React, { useState } from "react";


function AddCar() {
    // newCar holds the form data, and will be the car that is posted to the server
    const [newCar, setNewCar] = useState({isCompared: false})

    // chages to the form update the newCar immediately via a controlled form
    function handleFormChange(event) {
        setNewCar({...newCar, [event.target.name]: event.target.value})
    }

    // add newCar to the server
    // we do not use preventDefault because we want the page to refresh
    // we don't need to keep the form populated after submission
    function handleAddCarSubmit() {
        fetch("http://localhost:3001/cars", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCar)
        })
    }

    return (
        <div className="detail-container">
            <h3>Create a car to add</h3>
            <form onSubmit={handleAddCarSubmit} onChange={handleFormChange}>
                <table><tbody>
                    <tr><td>Make:</ td><td><input    type="text"   name="make" ></input   ></td></tr>
                    <tr><td>Model:</td><td><input    type="text"   name="model"></input   ></td></tr>
                    <tr><td>Year:</ td><td><input    type="number" name="year" ></input   ></td></tr>
                    <tr><td>Miles:</td><td><input    type="number" name="miles"></input   ></td></tr>
                    <tr><td>Notes:</td><td><textarea type="text"   name="notes"></textarea></td></tr>
                </tbody></table>
                <button>Add car</button>
            </form>
        </div>
    )
}

export default AddCar;
