import React, { useState, useEffect } from 'react';
import * as api from '../utils/api'

const Agent = (props) => {
    const [agentVersion, setAgentVersion] = useState([]);

    useEffect(() => {
        const intervalFunc = () => {
            const agentData = api.getAgentInfo(props.agent);
            setAgentVersion(agentData.version);
        }

        const intervalId = setInterval(intervalFunc, 3000)
        return () => clearInterval(intervalId);

    }, []);


    return (
        <div className="Agent">
            <p> Agent: {props.agent}</p>
            {/* <p> ip: {agentData.ip}</p>
            <p> name: {agentData.name}</p> */}
            <p> version: {agentVersion}</p>
        </div>
    );
};

export default Agent;