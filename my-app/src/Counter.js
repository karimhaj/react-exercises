import React, { useEffect, useState } from 'react';

export function Counter({initialValue = 0, onCounterChange}){
    const [counter, setCounter] = useState(initialValue);

    useEffect(()=>{onCounterChange(counter)}, [counter,onCounterChange])

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