import React, { useEffect, useState } from 'react';

export function Counter({initialValue = 0, onCounterChange}){
    const [counter, setCounter] = useState(initialValue);

    useEffect(()=>{
        const intervalCounter = setInterval(()=>{ setCounter(counter + 1)},1000)
        return () =>{clearInterval(intervalCounter)}}, [counter])

    return(<div>
        <h1>Counter: {counter}</h1>
        </div>)
}