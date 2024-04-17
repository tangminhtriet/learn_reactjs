import React from 'react';
import ToDoList from '../../components/ToDoList';
import { useState } from 'react';


const ListPage = (props) => {
    const Inittodo = [
        {
            id: 1,
            title: 'Eat',
            status: 'New'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'Completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'New'
        }
    ]
    const [todolist, setToDo] = useState(Inittodo)
    const [filterStatus, setFilter] = useState('all')

    const handleToDoClick = (todo, idx) => {
        console.log(todo, idx);

        const newToDoList = [...todolist];

        newToDoList[idx] = {
            ...newToDoList[idx],
            status: newToDoList[idx].status === 'New' ? 'Completed' : 'New'
        };
        setToDo(newToDoList)
    }
    function handleShowAll() {
        setFilter('all');
    }
    function handleShowCompleted() {
        setFilter('Completed');
    }
    function handleShowNew() {
        setFilter('New');
    }
    const renderedToDoList = todolist.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    return (
        <div>
            <h3>ToDoList</h3>
            <ToDoList todoList={renderedToDoList} OnToDoClick={handleToDoClick} />
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show Completed</button>
            <button onClick={handleShowNew}>Show New</button>
        </div>
    );
};
ListPage.propTypes = {
};
export default ListPage;