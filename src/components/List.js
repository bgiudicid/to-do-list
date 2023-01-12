import { useEffect, useState } from "react"
import React from 'react'
import trash from '../assets/images/trash.svg';
import pen from '../assets/images/pen.svg';
import '../styles/List.css';
import { addTask, deleteTask, getTasks } from "../api/tasks";

const initialTask = {
  addTask:""
}
//var numTasks = 0;

function List() {
    const [tasks,setTasks] = useState([]);
    const [task, setTask] = useState(initialTask);

    useEffect(() => {
      console.log()
      setTask(10,"task taks taks")
    },[]

    )

    async function showTasks() {
        const allTasks = await getTasks()
        setTasks(allTasks)
        console.log(allTasks)
    }
    useEffect(() => {
        showTasks()
        //console.log(showTasks.length)
    }, [])

    const deleteData = async (id) => {
       await deleteTask(id)
       await showTasks();
        };

    const handleSubmit = async (e) => {
      e.preventDefault();
      addTask(task);
      //alert (`New task! ${task.task}`);
      await showTasks();
      task.task=""
    }

    const handleChange = (e) => {
      setTask({
        ...task,
        [e.target.name]: e.target.value
      })
    }

  return (
    
        <>
            <form onSubmit={handleSubmit}>
           <input type="text" name="task" id="task" placeholder="Add a new task" value = {task.task} onChange={handleChange}> 
                   {/* <input type="text" name="addtask" id="addTask" placeholder="Add a new task" 
                   value="task" onChange={(e) => setTasks(
                   e.target.value)}> </input>*/}
            </input>
            <button type="submit">ADD</button>
            </form>
             <ul>
            {
             tasks.map((tasks,index) =>
            
                 <li key={index}>{tasks.task}
                 <button id="delete-button"  onClick={() => deleteData(tasks.id)}><img src= {trash} id='trash-icon' alt='trash icon'/></button>
                 <button id="modify-button"><img src= {pen} id='pen-icon' alt='pen icon'/></button>
                 </li>
            
             )
            }
             </ul>

        </>
    
  )
}

export default List