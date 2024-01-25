import React from "react";

const DisplayToDo = ({todoList, setTodoList}) => {

    function deleteTodo(id){
        setTodoList(todoList.filter(todo => todo.id != id))
    }

    return (
        <div>
            <ul>
                {
                    todoList.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )



}

export default DisplayToDo