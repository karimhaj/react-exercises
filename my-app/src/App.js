import React from "react";
import { Welcome } from './Message';
import  InteractiveWelcome from "./InteractiveWelcome";

const theName = <b>Clark</b>;

export class App extends React.Component {
    render(){
        return(
            <div>
                <Welcome age="19" name={theName}/>
                <InteractiveWelcome />
            </div>
        )
    }
}