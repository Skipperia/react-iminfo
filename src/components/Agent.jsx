import React from 'react';
import * as api from '../utils/api'

const Agent = (props) => {
    const agentData = api.getAgentInfo(props.agent);
    return (
        <div className="Agent">
            <p> Agent: {props.agent}</p>
            <p> ip: {agentData.ip}</p>
            <p> name: {agentData.name}</p>
            <p> version: {agentData.version}</p>
        </div>
    );
};

export default Agent;