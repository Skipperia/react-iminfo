import React from 'react';
import { Button } from 'primereact/button';

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
        <div className="Task">
            <p>some task info here</p>
            <Button label="Primary" size='small' outlined onClick={showPopup} />
        </div>
    );
};

export default Task;