import React from "react";
import {Counter} from "./Counter";


export class App extends React.Component {
    render(){
        return(
            <div>
                <Counter initialValue={2} onCounterChange={(counter)=>{console.log(`the counter is now ${counter}`)}}/>
            </div>
        )
    }
}