import React, { useState } from "react";

function CarDetails({ car }) {
    const [notes, setNotes] = useState(car.notes)

    function handleNotesSubmit(event) {
        event.preventDefault()
        console.log(event.target[0].value)
        fetch(`http://localhost:3001/cars/${car.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"notes": event.target[0].value})
          })
    }

    return (
        <div>
            <p>Year: {car.year}</p>
            <p>Miles: {car.miles}</p>
            <form onSubmit={handleNotesSubmit}>
                <label>Notes: </label>
                <input type="text" value={notes} onChange={event => setNotes(event.target.value)}/>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default CarDetails;
