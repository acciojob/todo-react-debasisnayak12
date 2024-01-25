import React, { useState } from "react";

const CreateToDo = ({todoList, setTodoList}) => {
const [todo, setTodo] = useState("")

function handleSubmnit(e){
    e.preventDefault()

    let lastElement = todoList[todoList.length - 1]
    let lastId = lastElement ? lastElement.id : 0

    let obj = {
        id: lastId + 1,
        title: todo
    }

    console.log(obj)

    setTodoList([...todoList, obj])

    setTodo("")

}


    return (
        <div className="container">
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmnit}>
                <input type="text" placeholder="Enter todo"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )


}

export default CreateToDo;