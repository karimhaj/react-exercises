import React from "react";
import { Hello } from './HelloWorld';
import { Welcome } from './Message';

export class App extends React.Component {
    render(){
        return(
            <div>
                <Hello />
                <Welcome name='Ferdinando' />
            </div>
        )
    }
}