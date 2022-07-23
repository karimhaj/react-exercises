import React from "react";
import { Hello } from './HelloWorld';
import { Welcome } from './Message';

const theName = <b>Clark</b>;

export class App extends React.Component {
    render(){
        return(
            <div>
                <Hello />
                <Welcome age="19" name={theName}/>
            </div>
        )
    }
}