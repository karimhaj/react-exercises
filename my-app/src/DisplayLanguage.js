import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
// import { LanguageContext } from "./LanguageContext";

const strings = {
    it: {
        languageSelected: 'Lingua Italiana'
    },
    en: {
        languageSelected: 'English Language'
    }
}

export default function DisplayLanguage(){
    const language = useContext(LanguageContext); 

    return (<div>
        <h1>{strings[language].languageSelected}</h1>
    </div>)
}