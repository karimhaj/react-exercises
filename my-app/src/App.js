import React from "react";
import { Hello } from './HelloWorld';
import { Welcome } from './Message';
import Counter from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { TodoList } from "./TodoList";
import "./index.css"
import { Container } from "./Container";

const theName = <b>Clark</b>;

export class App extends React.Component {
    render(){
        return(
            <Container title="This awesome application">
                <Hello />
                <Welcome age="19" name={theName}/>
                <Counter value={0} incrementInterval={1000} incrementAmount={2} />
                <InteractiveWelcome />
                <TodoList />
            </Container>
        )
    }
}