import React from "react";
import { Hello } from './HelloWorld';
import { Welcome } from './Message';
import Counter from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { TodoList } from "./TodoList";
import "./index.css"
import { Container } from "./Container";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

const theName = <b>Clark</b>;

export class App extends React.Component {

    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }



    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleLanguageChange}>
                <option value='en'>ENGLISH</option>
                <option value='it'>ITALIANO</option>
            </select>
                <Container title="This awesome application">
                    <hr/>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                    </LanguageContext.Provider> 
                    <Hello />
                    <Welcome age="19" name={theName} />
                    <Counter value={0} incrementInterval={1000} incrementAmount={2} />
                    <InteractiveWelcome />
                    <TodoList /> 
                </Container>
            </div>
        )
    }
}