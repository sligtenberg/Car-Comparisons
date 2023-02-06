import React, { useState } from "react";

function AddCar({ addCarToState }) {
    // formData holds the form data, and will be the car that is posted to the server
    const [formData, setFormData] = useState({
        isCompared: false,
        make: "",
        model: "",
        year: "",
        miles: "",
        notes: ""
    })

    // changes to the form update the formData immediately via a controlled form
    function handleFormChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // add formData to the server
    // we do not use preventDefault because we want the page to refresh
    // we don't need to keep the form populated after submission
    function handleAddCarSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3000/cars", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(addCarToState)
        setFormData({
            isCompared: false,
            make: "",
            model: "",
            year: "",
            miles: "",
            notes: ""
        })
    }

    return (
        <div className="detail-container">
            <h3>Create a car to add</h3>
            <form onSubmit={handleAddCarSubmit} onChange={handleFormChange}>
                <table><tbody>
                    <tr><td>Make:</ td><td><input    type="text"   value={formData.make}  name="make" ></input   ></td></tr>
                    <tr><td>Model:</td><td><input    type="text"   value={formData.model} name="model"></input   ></td></tr>
                    <tr><td>Year:</ td><td><input    type="number" value={formData.year}  name="year" ></input   ></td></tr>
                    <tr><td>Miles:</td><td><input    type="number" value={formData.miles} name="miles"></input   ></td></tr>
                    <tr><td>Notes:</td><td><textarea type="text"   value={formData.notes} name="notes"></textarea></td></tr>
                </tbody></table>
                <button>Add car</button>
            </form>
        </div>
    )
}

export default AddCar;
