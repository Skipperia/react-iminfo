import React, { useState, useEffect } from 'react';
import * as api from '../utils/api'
import '../assets/styles/Agent.css'

const Agent = (props) => {


    const [agentData, setAgentData] = useState([]);
    useEffect(() => {
        const intervalFunc = async () => {
            const agentData = await api.getAgentInfo(props.agent);
            setAgentData(agentData);
        }

        const intervalId = setInterval(intervalFunc, 3000)
        return () => clearInterval(intervalId);
    }, []);




    return (
        <div className="Agent">
            <div className="AgentTitle"> Agent: {props.agent}</div>
            <p> IP: {agentData.ip}</p>
            <p> Version: {agentData.version}</p>
        </div>
    );
};

export default Agent;