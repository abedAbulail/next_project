"use client";

import { useState, useEffect } from "react"

export default function Todo() {
    const [todos, setTodos] = useState({});
    useEffect( ()=>{
        const fetchTodos = async () => {
       const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
       const result = await response.json();
       setTodos(result);
        }
        fetchTodos();
    
    
    },[])
    return (
        <div className="todo-container">
            <h2>Todo Component</h2>
            <p>Todo: {todos.title}</p>
            <p>Completed: {todos.completed ? "Yes" : "No"}</p>
        </div>
    )
}