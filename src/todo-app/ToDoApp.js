import React from 'react';
import { v4 as uid } from "uuid";

import './ToDoApp.css';

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
        <div>
            <h2 className="heading-bottom-border">To Do App</h2>
            <div className="main-body">
                <div>
                    <div>
                        <form onSubmit={submitHandler}>

                            <input autocomplete="off" placeholder="Type ToDo item..." className="text-box" type="text" name="newTask" value={todo} onChange={handleChange} />
                            <button className="custom-button">Add</button>

                            <hr />
                                
                            <ul className="todos">
                            {
                                todos.length > 0 && 
                                todos.map(td => (
                                    <li key={uid()}> 
                                        <label > 
                                            <input 
                                                type="checkbox" 
                                                name={td.id} 
                                                className="checkbox" 
                                                checked={td.completed}
                                                onChange={handleChange}
                                            /> 
                                            <span className={ td.completed ? "todo-text completed" : "todo-text" } width="400px">
                                                {td.name}
                                            </span>

                                            <button type="button" className="remove-button" onClick={handleRemoveClick} id={td.id}>Remove</button>
                                        </label> 
                                    </li>
                                ))
                            }
                            </ul>

                            { todos.length === 0 && <h3>No Items</h3>}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoApp