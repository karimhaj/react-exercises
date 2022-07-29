import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { UncontrolledLogin } from "./UncontrolledLogin";
export class App extends React.Component {
    render(){
        return(
            <div>
                <InteractiveWelcome />
                <UncontrolledLogin />
            </div>
        )
    }
}