import React from 'react'
import ToDoList from '../../components/ToDoList/Todolist';
import Done from '../../components/Done/Done';

const Sport = (props) => {
    return (
    <>
        <h1>This is sport page</h1>
        <ToDoList/>
        <Done/>
    </>
    );
};

export default Sport;