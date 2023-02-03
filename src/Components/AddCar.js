import React from "react";

function AddCar() {
    function handleAddCarSubmit(formData) {
        console.log(formData)
    }

    return (
        <form id="add-car-form" onSubmit={e => handleAddCarSubmit(e.value.target)}>
            <table><tbody>
                <tr><td>Make: </td><td><input></input></td></tr>
                <tr><td>Model: </td><td><input></input></td></tr>
                <tr><td>Year: </td><td><input></input></td></tr>
                <tr><td>Miles: </td><td><input></input></td></tr>
                <tr><td>Notes: </td><td><textarea></textarea></td></tr>
            </tbody></table>
            <button>Add car</button>
        </form>
    )
}

export default AddCar;
