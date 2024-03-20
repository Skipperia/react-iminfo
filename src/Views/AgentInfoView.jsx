import Agent from "../components/Agent.jsx";
import '../assets/styles/AgentInfoView.css'
import React, { useState, useEffect, useContext } from "react";
import * as api from "../utils/api";
import { AdvancedViewContext } from '../utils/AdvancedContext.js'

function AgentInfoView(props) {
    const [agentData, setAgentData] = useState({});
    const { isAdvancedView } = useContext(AdvancedViewContext);


    useEffect(() => {
        const intervalFunc = async () => {
            const updatedAgentData = { ELA: {}, EWA: {} };
            updatedAgentData.ELA = await api.getAgentInfo("ELA");
            updatedAgentData.EWA = await api.getAgentInfo("EWA");
            setAgentData(updatedAgentData);
        }

        const intervalId = setInterval(intervalFunc, 1000)
        return () => clearInterval(intervalId);
    }, []);



    return (
        <div>
            {
                isAdvancedView && (<div className="AgentInfoView">
                    <Agent agent="ELA" agentData={agentData.ELA} />
                    <Agent agent="EWA" agentData={agentData.EWA} />
                </div>)
            }
        </div>
    );
}

export default AgentInfoView;