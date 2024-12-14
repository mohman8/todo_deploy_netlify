import React from "react";

function taskItem({ task, toggleTask, deleteTask }) {
    return (
        <li style={{ textDecoration: task.completed? "line-through": "none"}}>
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
        />{task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}
export default taskItem