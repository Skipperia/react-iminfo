import React from "react";
import MainPage from "./Views/MainPage.jsx";
import { PrimeReactProvider } from 'primereact/api';


function App() {
    const value = {
        ripple: true
    };


    return (
        <PrimeReactProvider value={value}>
            <MainPage />
        </PrimeReactProvider>
    );
}

export default App;