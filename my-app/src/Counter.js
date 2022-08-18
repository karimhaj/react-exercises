import React from 'react';
import { useCounter } from './UseCounter';

export function Counter({initialValue = 0}){

    const {onIncrement, onDecrement, onReset, counter} = useCounter(initialValue)
    return(<div>
        <h1>Counter: {counter}</h1>
        <button onClick={onIncrement}>increment counter</button>
        <button onClick={onDecrement}>decrement counter</button>
        <button onClick={onReset}>reset</button>
        </div>)
}