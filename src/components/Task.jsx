import React from 'react';

const Task = () => {
    const closePopup = () => {
        window.electron.closePopup();
    }

    const showPopup = () => {
        window.electron.openPopup('special event');
        setTimeout(closePopup, 3000);
    };


    return (
        <div className="Task">
            <p>some task info here</p>
            <button onClick={showPopup}>Show Popup</button>
        </div>
    );
};

export default Task;