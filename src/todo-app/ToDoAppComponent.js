import React from 'react'
import { v4 as uid } from "uuid";
import './ToDoApp.css'

function ToDoAppComponent(props) {
    return (
        <div>
            <h2 className="heading-bottom-border">To Do App</h2>
            <div className="main-body">
                <div>
                    <div>
                        <form onSubmit={props.submitHandler}>

                            <input autoComplete="off" placeholder="Type ToDo item..." className="text-box" type="text" name="newTask" value={props.todo} onChange={props.handleChange} />
                            <button className="custom-button">Add</button>

                            <hr />
                                
                            <ul className="todos">
                            {
                                props.todos.length > 0 && 
                                props.todos.map(td => (
                                    <li key={uid()}> 
                                        <label > 
                                            <input 
                                                type="checkbox" 
                                                name={td.id} 
                                                className="checkbox" 
                                                checked={td.completed}
                                                onChange={props.handleChange}
                                            /> 
                                            <span className={ td.completed ? "todo-text completed" : "todo-text" } width="400px">
                                                {td.name}
                                            </span>

                                            <button type="button" className="remove-button" onClick={props.handleRemoveClick} id={td.id}>Remove</button>
                                        </label> 
                                    </li>
                                ))
                            }
                            </ul>

                            { props.todos.length === 0 && <h3>No Items</h3>}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoAppComponent