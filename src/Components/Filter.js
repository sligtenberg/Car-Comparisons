import React from "react";

function Filter({ setMilesRange, milesRange }) {

    return (
        <div>
            <form>Filter by miles:
                <input type="text" placeholder="min" onChange={e => setMilesRange({min: e.target.value, max: milesRange.max})}></input>
                <input type="text" placeholder="max" onChange={e => setMilesRange({min: milesRange.min, max: e.target.value})}></input>
            </form>
        </div>
    )
}

export default Filter