import React from "react";
import { useState } from "react";


function TaskInput({ addTask }) {
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input.trim());
        setInput("");
    };
    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
};
export default TaskInput;