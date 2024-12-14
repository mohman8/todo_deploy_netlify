import React from "react";
import { useState } from "react";
import "./App.css";
// import TaskInput from "./TaskInput";
// import TaskList from "./TaskList";
import SignUp from "./loginSignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./loginSignIn/Login";
import TaskPage from "./TaskPage";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/tasks" element={<TaskPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  /* <h1>Daily Tasks</h1>
<TaskInput addTask={addtask} />
<TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} /> */
}
