import React from "react";
import "./index.css"
import { Container } from "./Container";



export class App extends React.Component {
    render(){
        return(
            <Container title="This awesome application">
                <h1>Some content</h1>
            </Container>
        )
    }
}