import Header from "../components/Header.jsx";
import AgentInfoView from "./AgentInfoView.jsx";
import ResourcesView from "./ResourcesView.jsx";
import { ToggleButton } from 'primereact/togglebutton'
import '../assets/styles/MainPage.css'
import React, { useContext } from "react";
import { AdvancedViewContext } from '../utils/AdvancedContext.js';
import loadable from '@loadable/component';


const TaskInfoView = loadable(() => import('./TaskInfoView.jsx'), {
    fallback: <div>Loading...</div>,
  });

const MainPage = () => {
    const { isAdvancedView, setIsAdvancedView } = useContext(AdvancedViewContext);
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