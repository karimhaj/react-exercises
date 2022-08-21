import React, { useState } from 'react';

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement(){
        setCounter(c => c + 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return(<div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleCounterIncrement}>increment counter</button>
        <button onClick={handleCounterReset}>reset</button>
        </div>)
}