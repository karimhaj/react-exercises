import React from "react";
import { LanguageContext } from "./LanguageContext";
// import { LanguageContext } from "./LanguageContext";

const strings = {
    it: {
        helloInLanguage: 'ciao come stai?'
    },
    en: {
        helloInLanguage: 'hello how are you?'
    }
}

export default class DisplayLanguage extends React.Component {



    render() {
        return (<div>
            <LanguageContext.Consumer>
            {language => {
                return <div>
                    {strings[language].helloInLanguage}
                </div>
            }
            }
            </LanguageContext.Consumer>
        </div>)
    }
}

