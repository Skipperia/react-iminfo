import React from "react";
import MainPage from "./Views/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import { PrimeReactProvider } from 'primereact/api';


function App() {
    const value = {
        ripple: true
    };


    return (
        <PrimeReactProvider value={value}>
            <MainPage />
            <Footer />
        </PrimeReactProvider>
    );
}

export default App;