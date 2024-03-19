import React from 'react';
import { Button } from 'primereact/button';

import { Card } from 'primereact/card';


const Task = () => {
    const closePopup = () => {
        window.electron.closePopup();
    }

    const showPopup = () => {
        window.electron.openPopup('special event');
        window.electron.notify({ title: 'event', body: 'happend' });
        setTimeout(closePopup, 3000);
    };


    return (
        <Card className="Task">
            <p>some task info here</p>
            <Button label="Primary" size='small' outlined onClick={showPopup} />
        </Card>
    );
};

export default Task;