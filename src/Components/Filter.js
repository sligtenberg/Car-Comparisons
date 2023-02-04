import React from "react";

function Filter({ carFilter, setCarFilter }) {
    function handleFormChange(event) {
        setCarFilter({...carFilter, [event.target.name]: event.target.value})
    }

    return (
        <div id="filter">
            <h3>Filter</h3>
            <form onChange={handleFormChange}><table><tbody>
                <tr>
                    <td>Make</td>
                    <td><input type="text" name="make"></input></td>
                    <td>Miles</td>
                    <td><input type="text" placeholder="min" name="milesMin"></input></td>
                    <td><input type="text" placeholder="max" name="milesMax"></input></td>
                </tr>
                <tr>
                    <td>Model</td>
                    <td><input type="text" name="model"></input></td>
                    <td>Year</td>
                    <td><input type="text" placeholder="min" name="yearMin"></input></td>
                    <td><input type="text" placeholder="max" name="yearMax"></input></td>
                </tr>
            </tbody></table></form>
        </div>
    )
}

export default Filter;
