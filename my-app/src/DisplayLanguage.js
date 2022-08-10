import React from "react";
import { LanguageContext } from "./LanguageContext";
// import { LanguageContext } from "./LanguageContext";

const strings = {
    it: {
        languageSelected: 'Italiano'
    },
    en: {
        languageSelected: 'English'
    }
}

export default class DisplayLanguage extends React.Component {



    render() {
        return (<div>
            <LanguageContext.Consumer>
            {language => {
                return <div>
                    <h1>{strings[language].languageSelected}</h1> 
                </div>
            }
            }
            </LanguageContext.Consumer>
        </div>)
    }
}

