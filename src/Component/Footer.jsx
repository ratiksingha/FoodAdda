import React from "react";
import { createContext } from "react";
import Demo from "./Demo";


export const GreetContext = createContext();


const Footer = () => {
    const devloperName="Ratik Singh"
    return (
        <footer className="App-footer">
            <GreetContext.Provider value={devloperName}>
            
                
            </GreetContext.Provider>
            
        </footer>
    );
    }

    

    export default Footer;