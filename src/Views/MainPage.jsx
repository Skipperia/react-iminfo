import Header from "../components/Header.jsx";
import TaskInfoView from "./TaskInfoView.jsx";
import AgentInfoView from "./AgentInfoView.jsx";
import ResourcesView from "./ResourcesView.jsx";
import { ToggleButton } from 'primereact/togglebutton'
import '../assets/styles/MainPage.css'
import React, { useState, useContext } from "react";
import Switch from '@mui/material/Switch'
import { AdvancedViewContext } from '../utils/AdvancedContext.js';

const MainPage = () => {
    const { isAdvancedView, setIsAdvancedView } = useContext(AdvancedViewContext);
    console.log(isAdvancedView);
    const toggleAdvancedView = () => {
        setIsAdvancedView(!isAdvancedView)
    }

    return (
        <div className="MainPage">
            <Header />
            <h1> Shalom to iminfo</h1>
            <p>here you get all your task info and how map download fails</p>
            <ToggleButton onLabel="Disable Advanced View" offLabel="Enable Advanced View" onChange={toggleAdvancedView} checked={isAdvancedView}></ToggleButton>
            <TaskInfoView isAdvancedView={isAdvancedView} />
            <ResourcesView isAdvancedView={isAdvancedView} />
            <AgentInfoView isAdvancedView={isAdvancedView} />
        </div>
    )
}

export default MainPage;