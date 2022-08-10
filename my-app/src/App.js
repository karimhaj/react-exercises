import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

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
            <br />
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                    </LanguageContext.Provider> 
            </div>
        )
    }
}