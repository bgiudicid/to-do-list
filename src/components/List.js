import { useEffect, useState } from "react"
import React from 'react'
import trash from '../assets/images/trash.svg';
import pen from '../assets/images/pen.svg';
import '../styles/List.css';
import { deleteTask, getTasks } from "../api/tasks";

function List() {
    const [tasks,setTasks] = useState([])
    async function showTasks() {
        const allTasks = await getTasks()
        setTasks(allTasks)
    }
    useEffect(() => {
        showTasks()
    }, [])

    const deleteData = async (id) => {
       await deleteTask(id)
       await showTasks();
        };

    
  return (
    
        <>
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