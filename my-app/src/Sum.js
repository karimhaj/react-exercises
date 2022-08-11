import React from 'react';

export function Sum({...props}){
    let result = props.sum.reduce((current,next)=> current + next,0)
    return(<div><h1>{result}</h1></div>)
}