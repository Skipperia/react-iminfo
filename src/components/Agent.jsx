import React, { useState, useEffect } from 'react';
import * as api from '../utils/api'
import '../assets/styles/Agent.css'
import { Fieldset } from 'primereact/fieldset';
import { Avatar } from 'primereact/avatar';

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


    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image="assets/icons/linuxicon.png" shape="square" />
            <span className="font-bold"> Amy Elsner</span>
        </div>
    );



    return (
        <Fieldset legend={legendTemplate}>
            <div className="AgentTitle"> Agent: {props.agent}</div>
            <p> IP: {agentData.ip}</p>
            <p> Version: {agentData.version}</p>
        </Fieldset>
    );
};

export default Agent;