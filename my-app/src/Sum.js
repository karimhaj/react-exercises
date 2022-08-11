import React from 'react';

export function Sum({...props}){
    let result = props.numbers.reduce((current,next)=> current + next,0)
    return(<div><h1>{result}</h1></div>)
}

Sum.defaultProps={
    numbers: [3,5]
}