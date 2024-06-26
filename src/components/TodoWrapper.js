import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditTodo from "./EditTodo";
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4, task: todo, completed: false, isEditing: false }]);
        console.log(todos);
    }
    const toggleCompleted = id => {
        setTodos(
            todos.map(todo => (
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ))
        )
    }

    const deleteTodo = id => {
        setTodos(
            todos.filter(todo => todo.id !== id
            )
        )
    }
    const editTask = (task, id) => {
        setTodos(
            todos.map(todo => (
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            ))
        )
    }

    const editTodo = id => {
        setTodos(
            todos.map(todo => (
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
            )
        )
    }
    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (todo.isEditing ? (
                <EditTodo editTodo={editTask} task={todo} />
            ) : (
                <Todo
                    task={todo}
                    key={index}
                    toggleCompleted={toggleCompleted}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            )
            )
            )}
        </div>
    )
}
export default TodoWrapper;
