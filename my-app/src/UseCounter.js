import { useState, useCallback } from "react";

export function useCounter ({initialValue = 0}){
    const [counter, setCounter]= useState(initialValue);

    const handleCounterIncrement = useCallback(function counterIncrement(){
        setCounter( c => c + 1 )
    }, [])

    const handleCounterDecrement = useCallback(function counterDecrement(){
        setCounter( c => c - 1 )
    }, [])

    const handleCounterReset = useCallback(function counterReset(){
        setCounter( initialValue )
    }, [initialValue])

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}