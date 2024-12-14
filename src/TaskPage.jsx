import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useState } from "react";



export default function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const addtask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <h1>Daily Tasks</h1>
            <TaskInput addTask={addtask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </>
    )
}