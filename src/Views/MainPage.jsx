
import Header from "../components/Header.jsx";
import TaskInfoView from "./TaskInfoView.jsx";
import AgentInfoView from "./AgentInfoView.jsx";
import ResourcesView from "./ResourcesView.jsx";
import '../assets/styles/MainPage.css'
import React from "react";



const MainPage = () => {
    return (
        <div className="MainPage">
            <Header />
            <h1> Shalom to iminfo</h1>
            <p>here you get all your task info and how map download fails</p>
            <TaskInfoView />
            <AgentInfoView />
            <ResourcesView />
        </div>
    )
}

export default MainPage;