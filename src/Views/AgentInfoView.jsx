import Agent from "../components/Agent.jsx";
import '../assets/styles/AgentInfoView.css'
import React, {useState, useEffect} from "react";
import * as api from "../utils/api";

function AgentInfoView(props) {
    const [agentData, setAgentData] = useState({});

    useEffect(() => {
        const intervalFunc = async () => {
            const updatedAgentData = {ELA: {}, EWA: {}};
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
                props.isAdvancedView && (<div className="AgentInfoView">
                    <Agent agent="ELA" agentData={agentData.ELA} isAdvancedView={props.isAdvancedView}/>
                    <Agent agent="EWA" agentData={agentData.EWA} isAdvancedView={props.isAdvancedView}/>
                </div>)
            }
        </div>
    );
}

export default AgentInfoView;