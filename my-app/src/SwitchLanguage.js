import React from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage"
export class SwitchLanguage extends React.Component {


    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    

    render() {

        const language = this.state.language 

        return (
            <div>
                <select value={this.state.value} onChange={this.handleLanguageChange}>
                <option value='en'>ENGLISH</option>
                <option value='it'>ITALIANO</option>
            </select>
            <br />
                <LanguageContext.Provider value={language}>
                    <DisplayLanguage />
                    </LanguageContext.Provider> 
            </div>
        )
    }
}