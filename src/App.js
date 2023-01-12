//import { useEffect } from 'react';
import './App.css';
//import api from '../src/api/tasks';
//import tasks from '../src/api/tasks';
import './App.css';
import List from '../src/components/List';
import AddTask from '../src/components/AddTask'

function App() {
//retrieveTasks
// const retrieveTasks = async () => {
//   const response = await api.get('/tasks');
//   return response.data;
// }

// const addTaskHandler = async (task) => {
//   console.log(tasks);
//   // const request = {
//   //   id: uuid(),
//   //   ...task
//   // }


//   // const response = await api.post('/tasks', request);
//   // console.log(response);
//   // setTasks([...tasks, response.data]);
// }

// useEffect(()=> {
//   const getAllTasks = async () => {
//     //const allTasks = await retrieveTasks();
//     // if (allTasks) setTasks(allTasks);
//   };
//   getAllTasks();
// },[]);

  return (
    <>
    <div id='page-box'>
      <header></header>
      <div id='box1'>
        <AddTask/>
      </div>
    </div>
    <div id='page-box2'>
      <div id='box2'>
        <List/>
      </div>
    </div>

    </>
  );
}

export default App;
