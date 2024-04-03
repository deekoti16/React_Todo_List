import React, { useState } from 'react';

const EditTodo = ({ editTodo, task }) => {
    const [inputValue, setInputValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(inputValue, task.id);
        if (!(inputValue)) alert('Add Todo');
        setInputValue("");
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
                className='todo-input'
                value={inputValue}
                placeholder='Update Task'
                onChange={(e) => setInputValue(e.target.value)} />
            <button className='todo-btn' type='submit'>Update Task</button>
        </form>
    )
}
export default EditTodo;