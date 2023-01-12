import { useEffect, useState } from "react"
import React from 'react'
import trash from '../assets/images/trash.svg';
import pen from '../assets/images/pen.svg';
import '../styles/List.css';
import { addTask, deleteTask, getTasks, editTask } from "../api/tasks";

const initialTask = {task:"", id:null};
var isEdit = false;
var editID = 0;

function List() {
    const [tasks,setTasks] = useState([]);
    const [task, setTask] = useState(initialTask);
    const [updateTask, setUpdateTask] = useState(null);

    async function showTasks() {
        const allTasks = await getTasks()
        setTasks(allTasks)
        //console.log(allTasks)
    }
    useEffect(() => {
        showTasks()
        isEdit = false;
        //console.log(showTasks.length)
    }, [])

    const deleteData = async (id) => {
       await deleteTask(id)
       await showTasks();
        };

    // https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_submit     
    const handleSubmit = async (e) => {
      e.preventDefault();
      addTask(task);
      //alert (`New task! ${task.task}`);
      await showTasks();
      setTask(initialTask);
    }

    const handleChange = (e) => {
      if (isEdit) {
        console.log(e.target.value);
        setUpdateTask({
            ...updateTask,
            [e.target.name]: e.target.value
        });
      } 
      else {
        setTask({
        ...task,
        [e.target.name]: e.target.value
      })
      }
        

    }

    const updateData = async (task) => {
        //console.log(isEdit)
       // await editTask(task)
        await showTasks();
        isEdit = false;
        editID = 0;
         };

    const editData = async (id) => {
        console.log(id)
        await showTasks();
        isEdit = true;
        editID= id;
        };

  return (
    
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" id="task" placeholder="Add a new task" value = {task.task} onChange={handleChange}> 
               </input>
                <button type="submit">ADD</button>
            </form>
             <ul>
             
            {
             tasks.map((task,index) => (

                <li key={index}> 
                {isEdit && editID === task.id ? (<>
                    {/* <input type="text" name="task" id="task" placeholder="Add a new task" value = {task.task} onChange={handleChange}> </input> */}
                    <input value={task.task} onChange={handleChange}></input>
                    <button onClick={() => updateData(task.task)}>SAVE</button>
                {/* <button id="delete-button"  onClick={() => deleteData(tasks.id)}><img src= {trash} id='trash-icon' alt='trash icon'/></button>
                <button id="modify-button" onClick={() => (isEdit = true)}><img src= {pen} id='pen-icon' alt='pen icon'/></button> */}
                </>
                ): (<>
                <input className="no-outline" value={task.task} disabled></input>
                <button id="delete-button"  onClick={() => deleteData(task.id)}><img src= {trash} id='trash-icon' alt='trash icon'/></button>
                <button id="modify-button" onClick={() => editData(task.id)}><img src= {pen} id='pen-icon' alt='pen icon'/></button>
                </>)}
                </li>  
                )
            
             )
            }
             </ul>

        </>
    
  )
}

export default List