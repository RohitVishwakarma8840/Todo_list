import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const TodoList = () => {

let [todos,setTodos]=useState(["sample Task"]);
let [newTodo,setNewTodo]=useState("");

let addNewTask=()=>{
  setTodos([...todos,newTodo]);
  setNewTodo("");
}

let updateTodoValue=(event)=>{
  setNewTodo(event.target.value);
}



  return (
    <div>
        <input placeholder="add a task"  value={newTodo} onChange={updateTodoValue} ></input>
        <br />
        <br />
        <button onClick={addNewTask}>Add Task</button>
  <br />
  <br />
  <br />

<hr />
      <h3>Todo-List</h3>

<ul>
{
  todos.map((todo)=>(
     <li>{todo}</li>
  ))

}

</ul>




    </div>
  )
}

export default TodoList
