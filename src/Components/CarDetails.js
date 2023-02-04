import React, { useState } from "react";

function CarDetails({ car, updateCar }) {
    // notes is displayed in the textarea
    const [notes, setNotes ] = useState(car.notes)

    function handleNotesChange(event) {
        setNotes(event.target.value)
    }

    function handleNotesSubmit(event) {
        event.preventDefault()
        car.notes = notes
        fetch(`http://localhost:3001/cars/${car.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"notes": notes})
          })
          .then(r => r.json())
          .then(updateCar(car))
    }

    return (
        <div id="compare-box">
            <div>Year: {car.year}</div>
            <div>Miles: {car.miles}</div>
            <form onSubmit={handleNotesSubmit}>
                <label>Notes: </label><br></br>
                <textarea type="text" value={notes} onChange={handleNotesChange}/><br></br>
                <button>Update notes</button>
            </form>
        </div>
    )
}

export default CarDetails;
