import React from 'react';
import { v4 as uid } from "uuid";

import ToDoAppComponent from "./ToDoAppComponent"

function ToDoApp() {

    let [ todo, setTodo ] = React.useState("");
    let [ todos, setToDos] = React.useState([ 
        {id: uid(), name: 'Check Gmail', completed: false}, 
        {id: uid(), name: 'Attend stand-up call', completed: false},
        {id: uid(), name: 'Internal discussion', completed: false}
    ]);

    function handleChange(event) {
        let { name, value, type } = event.target
        if(type === 'text') {
            setTodo( value )
        } else {
            let allTodos = todos.map( todoElement => {
                if(todoElement.id === name) {
                    todoElement.completed = !todoElement.completed
                }
                return todoElement
            });
            setToDos([...allTodos])
        }
    }

    function handleRemoveClick(event) {
        let index = todos.findIndex( ele => ele.id === event.target.id )
        todos.splice( index, 1 )
        setToDos( [...todos] )
    }
    
    function submitHandler(event) {
        event.preventDefault();
        if( todo.trim() !== "" ){
            setToDos( [ { id: uid(), name: todo, completed: false } , ...todos ] )
            setTodo('')
        }
    }

    return (
        <ToDoAppComponent 
            todo={todo} 
            setTodo={setTodo}
            todos={todos}
            setToDos={setToDos}
            handleChange={handleChange}
            handleRemoveClick={handleRemoveClick}
            submitHandler={submitHandler}
        />
    )
}

export default ToDoApp