import React from "react";
import MainPage from "./Views/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import { PrimeReactProvider } from 'primereact/api';
import AdvancedViewProvider from "./utils/AdvancedContext.js";


function App() {
    const value = {
        ripple: true
    };


    return (
        <PrimeReactProvider value={value}>
            <AdvancedViewProvider>
                <MainPage />
                <Footer />
            </AdvancedViewProvider>
        </PrimeReactProvider>
    );
}

export default App;