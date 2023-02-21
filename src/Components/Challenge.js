import React, { useState } from "react";

function Challenge() {
    const [textField, setTextField] = useState("")
    const [counter, setCounter] = useState(0)

    function handleTextInput(event) {
        //console.log(event.target.value)
        setTextField(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        setCounter(counter + textField.length)
        setTextField("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input value={textField} onChange={handleTextInput}></input>
            <button>Click Me!</button>
            <p>Counter: {counter}</p>
        </form>
    )
}

export default Challenge;