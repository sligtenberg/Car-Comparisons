import React from "react";

function Filter({ setMilesRange, milesRange, yearRange, setYearRange }) {

    return (
        <div id="filter">
            <form>Miles:
                <input type="text" placeholder="min" onChange={e => setMilesRange({min: e.target.value, max: milesRange.max})}></input>
                <input type="text" placeholder="max" onChange={e => setMilesRange({min: milesRange.min, max: e.target.value})}></input>
            </form>
            <form>Year:
                <input type="text" placeholder="min" onChange={e => setYearRange({min: e.target.value, max: yearRange.max})}></input>
                <input type="text" placeholder="max" onChange={e => setYearRange({min: yearRange.min, max: e.target.value})}></input>
            </form>
        </div>
    )
}

export default Filter