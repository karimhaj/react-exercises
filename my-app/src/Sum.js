import React from 'react';

export function Sum({numbers = [0,1]}){
    let result = numbers.reduce((current,next)=> current + next,0)
    return(<div><h1>{result}</h1></div>)
}
