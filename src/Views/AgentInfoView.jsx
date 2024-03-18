import Agent from "../components/Agent.jsx";
import '../assets/styles/AgentInfoView.css'
import React from "react";

function AgentInfoView() {

    return (
        <div className="AgentInfoView">
            <Agent agent="ELA" />
            <Agent agent="EWA" />
        </div>
    );
}

export default AgentInfoView;