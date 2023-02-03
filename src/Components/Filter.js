import React from "react";

function Filter({ milesRange, setMilesRange, yearRange, setYearRange, makeFilter, setMakeFilter, modelFilter, setModelFilter }) {

    return (
        <div id="filter">
            <h3>Filter</h3>
            <table>
                <tr>
                    <td>Make</td>
                    <td><input type="text" onChange={e => setMakeFilter(e.target.value)}></input></td>
                    <td>Miles</td>
                    <td><input type="text" placeholder="min" onChange={e => setMilesRange({min: e.target.value, max: milesRange.max})}></input></td>
                    <td><input type="text" placeholder="max" onChange={e => setMilesRange({min: milesRange.min, max: e.target.value})}></input></td>
                </tr>
                <tr>
                    <td>Model</td>
                    <td><input type="text" onChange={e => setModelFilter(e.target.value)}></input></td>
                    <td>Year</td>
                    <td><input type="text" placeholder="min" onChange={e => setYearRange({min: e.target.value, max: yearRange.max})}></input></td>
                    <td><input type="text" placeholder="max" onChange={e => setMilesRange({min: milesRange.min, max: e.target.value})}></input></td>
                </tr>
            </table>
        </div>
    )
}

export default Filter