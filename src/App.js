import { useEffect } from 'react';
import './App.css';
//import api from '../src/api/tasks';
import tasks from '../src/api/tasks';
import './App.css'

function App() {
//retrieveTasks
// const retrieveTasks = async () => {
//   const response = await api.get('/tasks');
//   return response.data;
// }

const addTaskHandler = async (task) => {
  console.log(tasks);
  // const request = {
  //   id: uuid(),
  //   ...task
  // }


  // const response = await api.post('/tasks', request);
  // console.log(response);
  // setTasks([...tasks, response.data]);
}

useEffect(()=> {
  const getAllTasks = async () => {
    //const allTasks = await retrieveTasks();
    // if (allTasks) setTasks(allTasks);
  };
  getAllTasks();
},[]);

  return (
    <>
    <header></header>
    <div id='box1'>
      <h1>TO-DO LIST</h1>
      <form>
        <input id="newTask"></input>
        <button id='addTask' onClick={addTaskHandler}>Add</button>
      </form>
    </div>
    <ul id='taskList'></ul>
    </>
  );
}

export default App;
