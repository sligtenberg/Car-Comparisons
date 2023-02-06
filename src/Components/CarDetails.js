import React, { useState } from "react";

function CarDetails({ car, updateCar }) {
    // notes are displayed in the textarea
    const [notes, setNotes ] = useState(car.notes)

    function handleNotesChange(event) {
        setNotes(event.target.value)
    }

    // update the server and update the DOM without refreshing
    function handleNotesSubmit(event) {
        event.preventDefault()
        car.notes = notes
        updateCar(car)
        fetch(`http://localhost:3000/cars/${car.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"notes": notes})
          })
          .then(r => r.json())
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
