import React from "react";
import Task from "../components/Task.jsx";
import '../assets/styles/TaskInfoView.css'

function TaskInfoView(props) {
    return (
        <div>
            <Task isAdvancedView={props.isAdvancedView}/>
        </div>
    )
}


export default TaskInfoView;