import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";


const Task = () => {
    const [taskData, setTaskData] = useState({});
    let count = 0;

    useEffect(() => {
        window.electron.on('responseTaskData', (receivedData) => {
            console.log("the data: " + JSON.stringify(receivedData));
            console.log("counter:" + count);
            count++;
            setTaskData(receivedData);
        });

        
        // Request data from the main process
        const intervalId = setInterval(() => {
            console.log("send request to data")
            window.electron.send('getTaskData', 'Requesting data');
        }, 3000)


        // Cleanup the listener
        return () => { clearInterval(intervalId) };
    }, []);


    const closePopup = () => {
        window.electron.closePopup();
    }

    const showPopup = () => {
        window.electron.openPopup('special event ');
        window.electron.notify({ title: 'event', body: 'happend' });
        setTimeout(closePopup, 3000);
    };

    const noRunningTaskComp = () => {
        (<div>
            <li>component: {taskData.component}</li>
            <li>task: {taskData.taskName}</li>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {taskData.component} installation progress
                </Typography>
                <LinearProgress variant="determinate" value={taskData.progress || 0} />
                <Typography variant="body2">
                    {taskData.progress}%
                </Typography>
            </CardContent>
        </div>)
    }

    const runningTaskComp = () => {
        return (<div>
            <p>component: {taskData.component}</p>
            <li>task: {taskData.taskName}</li>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {taskData.component} installation progress
                </Typography>
                <LinearProgress variant="determinate" value={taskData.progress || 0} />
                <Typography variant="body2">
                    {taskData.progress}%
                </Typography>
            </CardContent>
        </div>)
    }


    return (
        <Card className="Task">
            {taskData.progress !== 100 ? runningTaskComp() : noRunningTaskComp()}
            <Button label="Primary" size='small' outlined onClick={showPopup} />
        </Card>
    );
};

export default Task;