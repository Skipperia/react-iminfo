import React, {useState, useEffect} from 'react';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";


const Task = () => {
    const [taskData, setTaskData] = useState({});


    useEffect(() => {
        window.electron.on('responseTaskData', (receivedData) => {
            console.log(receivedData);
            setTaskData(receivedData);
        });
        // Request data from the main process
        window.electron.send('getTaskData', 'Requesting data');


        // Cleanup the listener
        return () => {
        };
    }, []);


    const closePopup = () => {
        window.electron.closePopup();
    }

    const showPopup = () => {
        window.electron.openPopup('special event');
        window.electron.notify({title: 'event', body: 'happend'});
        setTimeout(closePopup, 3000);
    };


    return (
        <Card className="Task">
            <li>component: {taskData.component}</li>
            <li>task: {taskData.taskName}</li>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {taskData.component} installation progress
                </Typography>
                <LinearProgress variant="determinate" value={taskData.progress}/>
                <Typography variant="body2">
                    {taskData.progress}%
                </Typography>
            </CardContent>
            <Button label="Primary" size='small' outlined onClick={showPopup}/>
        </Card>
    );
};

export default Task;