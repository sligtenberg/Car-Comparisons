import React from "react";

function Filter({ carFilter, setCarFilter }) {
    function handleFormChange(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        setCarFilter({...carFilter, [event.target.name]: event.target.value})
        console.log(carFilter)
    }

    return (
        <div id="filter">
            <h3>Filter</h3>
            <form onChange={handleFormChange}><table><tbody>
                <tr>
                    <td>Make</td>
                    <td><input type="text" name="make"></input></td>
                    <td>Miles</td>
                    <td><input type="text" placeholder="min" name="miles: {min}"></input></td>
                    <td><input type="text" placeholder="max" name="miles.max"></input></td>
                </tr>
                <tr>
                    <td>Model</td>
                    <td><input type="text" name="model"></input></td>
                    <td>Year</td>
                    <td><input type="text" placeholder="min" name="year.min"></input></td>
                    <td><input type="text" placeholder="max" name="year.max"></input></td>
                </tr>
            </tbody></table></form>
        </div>
    )
}

export default Filter;
