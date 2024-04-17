import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';
ToDoList.propTypes = {
    todoList: PropTypes.array,
    OnToDoClick: PropTypes.func,
};
ToDoList.defaultProps = {
    todoList: [],
    OnToDoClick: null,
}
function ToDoList({ todoList, OnToDoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!OnToDoClick) return;

        OnToDoClick(todo, idx);

    }
    return (
        <ul className='todolist'>
            {
                todoList.map((todo, idx) => (
                    <li key={todo.id} className={classNames({ completed: todo.status === 'Completed' })}

                        onClick={() => handleTodoClick(todo, idx)}
                    >{todo.title}</li>
                ))
            }
        </ul>
    );
}
export default ToDoList;