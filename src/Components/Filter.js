import React from "react";

function Filter({ setMilesRange, milesRange, yearRange, setYearRange }) {

    return (
        <div id="filter">
            <h4>Filter by:</h4>
            <table>
                <tr>
                    <td>Miles</td>
                    <td><input type="text" placeholder="min" onChange={e => setMilesRange({min: e.target.value, max: milesRange.max})}></input></td>
                    <td><input type="text" placeholder="max" onChange={e => setMilesRange({min: milesRange.min, max: e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Year</td>
                    <td><input type="text" placeholder="min" onChange={e => setYearRange({min: e.target.value, max: yearRange.max})}></input></td>
                    <td><input type="text" placeholder="max" onChange={e => setMilesRange({min: milesRange.min, max: e.target.value})}></input></td>
                </tr>
            </table>
        </div>
    )
}

export default Filter