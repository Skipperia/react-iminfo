import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import TaskInfoView from "./TaskInfoView.jsx";
import AgentInfoView from "./AgentInfoView.jsx";
import '../assets/styles/MainPage.css'
import React from "react";



const MainPage = () => {
    return (
        <div>
            <Header />
            <h1> Shalom to iminfo</h1>
            <p>here you get all your task info and how map download fails</p>
            <TaskInfoView />
            <AgentInfoView />
            <Footer />
        </div>
    )
}

export default MainPage;