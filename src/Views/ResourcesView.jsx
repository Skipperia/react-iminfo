/*
        <h1>Resource Usage</h1>
        <ResourceUsage memoryUsage={60} cpuUsage={45} bandwidthUsage={30}/>
*/


// import React from 'react';
// import ResourceUsage from '../components/ResourceUsage.jsx';


// export default function ResourcesView() {
//     return (
//         <div className="smtn">
//             <h1>Resource Usage</h1>
//             <ResourceUsage memoryUsage={60} cpuUsage={45} bandwidthUsage={30} />
//         </div>
//     )
// }


import React, {useState, useEffect} from 'react';
import '../assets/styles/ResourceUsage.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

export default function ResourcesView(props) {
    const [cpuUsage, setCpuUsage] = useState(0);
    const [ramUsage, setRamUsage] = useState(0);
    const [networkBandwidth, setNetworkBandwidth] = useState(0);

    useEffect(() => {
        // Replace this with real data fetching logic
        const interval = setInterval(() => {
            setCpuUsage(Math.random() * 100);
            setRamUsage(Math.random() * 100);
            setNetworkBandwidth(Math.random() * 100);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {
                props.isAdvancedView && (<div>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                CPU Usage
                            </Typography>
                            <LinearProgress variant="determinate" value={cpuUsage}/>
                            <Typography variant="body2">
                                {cpuUsage.toFixed(2)}%
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                RAM Usage
                            </Typography>
                            <LinearProgress variant="determinate" value={ramUsage}/>
                            <Typography variant="body2">
                                {ramUsage.toFixed(2)}%
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Network Bandwidth
                            </Typography>
                            <LinearProgress variant="determinate" value={networkBandwidth}/>
                            <Typography variant="body2">
                                {networkBandwidth.toFixed(2)} Mbps
                            </Typography>
                        </CardContent>
                    </Card>
                </div>)}
        </div>
    );
}