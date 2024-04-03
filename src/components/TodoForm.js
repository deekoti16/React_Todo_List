import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        if (!inputValue) alert('Add Task');
        setInputValue('');
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
                className='todo-input'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='What is today task?'
            />
            <button className="todo-btn" type='submit'>Add Task</button>
        </form>
    )
}
export default TodoForm;
