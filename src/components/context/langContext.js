import React, {useState} from "react";
import { IntlProvider } from "react-intl";
import MensajesIngles from './../lang/en-US.json'
import MensajesEspañol from './../lang/es-ES.json'

const LangContext = React.createContext();

const LangProvider = ({children}) => {

  const [mensajes, establecerMensajes] = useState(MensajesIngles);
  const [locale, establecerLocale] = useState('en-US');


  const establecerLenguaje = (lenguaje) => {

   switch (lenguaje) {
       case 'es-ES':
           establecerMensajes(MensajesEspañol);
           establecerLocale('es-ES')
           
           break;


        case 'es-US':

            establecerMensajes(MensajesIngles);
            establecerLocale('es-US')
            
            break;    
   
       default:
        establecerMensajes(MensajesIngles);
        establecerLocale('es-US')
                  
    }

  }

  return (
     <LangContext.Provider value={{establecerLenguaje: establecerLenguaje}} >
       <IntlProvider locale={locale} messages={mensajes}>

       {children}

       </IntlProvider>
        
 

     </LangContext.Provider>
  )
}

export {LangProvider, LangContext}
