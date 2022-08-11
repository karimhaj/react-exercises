import React from "react";
import { Sum } from "./Sum";


export class App extends React.Component {

    //if the numbers prop is not set the logic in the sum component won't work properly
    render() {
        return (
            <div>
                <Sum />
            </div>
        )
    }
}

