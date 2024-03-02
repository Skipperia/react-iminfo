import React from 'react';
import Agent from "./Agent.jsx";
import '../assets/styles/Main.css'

const Main = () => {
    return (
        <div className="Main">
            <Agent agent="ELA"/>
            <Agent agent="EWA"/>
        </div>
    );
};

export default Main;