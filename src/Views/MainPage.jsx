import Header from "../components/Header.jsx";
import TaskInfoView from "./TaskInfoView.jsx";
import AgentInfoView from "./AgentInfoView.jsx";
import ResourcesView from "./ResourcesView.jsx";
import {Button} from 'primereact/button';
import {ToggleButton} from 'primereact/togglebutton'
import '../assets/styles/MainPage.css'
import React, {useState} from "react";
import Switch from '@mui/material/Switch'


const MainPage = () => {
    const [isAdvancedView, setIsAdvancedView] = useState(false);

    const toggleAdvancedView = () => {
        setIsAdvancedView(!isAdvancedView);
    }

    return (
        <div className="MainPage">
            <Header/>
            <h1> Shalom to iminfo</h1>
            <p>here you get all your task info and how map download fails</p>
            {/*<Button label="Advanced View" size='small' onClick={toggleAdvancedView} outlined/>*/}
            <ToggleButton onLabel="Disable Advanced View" offLabel="Enable Advanced View" onChange={toggleAdvancedView} checked={isAdvancedView} outlined></ToggleButton>
            <TaskInfoView isAdvancedView={isAdvancedView}/>
            <ResourcesView isAdvancedView={isAdvancedView}/>
            <AgentInfoView isAdvancedView={isAdvancedView}/>
        </div>
    )
}

export default MainPage;