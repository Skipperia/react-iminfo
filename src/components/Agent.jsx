import React, {useState, useEffect} from 'react';
import * as api from '../utils/api'
import '../assets/styles/Agent.css'
import {Fieldset} from 'primereact/fieldset';
import linuxLogo from '../assets/icons/linuxicon.png'
import windowsLogo from '../assets/icons/windowsicon.jpg'

import {Avatar} from 'primereact/avatar';

const Agent = (props) => {
    const [agentImage, setAgentImage] = useState('');

    useEffect(() => {
        const imageMap = {
            'ELA': linuxLogo,
            'EWA': windowsLogo,
        };
        setAgentImage(imageMap[props.agent] || linuxLogo);
    }, [props.agent]);


    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image={agentImage} shape="circle"/>
            <span className="font-bold">{props.agent}</span>
        </div>
    );

    return (
        <Fieldset className="Agent" legend={legendTemplate}>
            <p> IP: {props.agentData?.ip || ""}</p>
            <p> Version: {props.agentData?.version || ""}</p>
        </Fieldset>
    );
};

export default Agent;