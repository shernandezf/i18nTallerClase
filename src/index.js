import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages1 from "./locales/es";
import localeEsMessages2 from "./locales/en";
import JobsList from "./components/jobslist";
let lang=navigator.language
let idioma

if(lang==='es-ES'){
    idioma="es-ES"
    ReactDOM.render(
        <IntlProvider locale={idioma} messages= {localeEsMessages1}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );
}else{
    idioma="en-EN"
    ReactDOM.render(
        <IntlProvider locale={idioma} messages= {localeEsMessages2}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );
}
