import React from "react";
import { Hello } from './HelloWorld';
import { Welcome } from './Message';
import Counter from "./Counter";

const theName = <b>Clark</b>;

export class App extends React.Component {
    render(){
        return(
            <div>
                <Hello />
                <Welcome age="19" name={theName}/>
                <Counter value={0} incrementInterval={1000} incrementAmount={2} />
            </div>
        )
    }
}