import React from "react";
import { CarDetails } from "./CarDetails";


export class App extends React.Component {
    render(){
        return(
            <div>
                <CarDetails initialData={{ model: "Audi", year: 2019, color: "Green" }}/>
            </div>
        )
    }
}