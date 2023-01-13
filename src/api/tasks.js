import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:3006/',
})

async function addTask(task) {
    const response = await axios.post(`http://localhost:3006/tasks`, task);
    return response
};

async function getTasks() {

    try {
        const response = await axios.get('http://localhost:3006/tasks');
        return response.data
       } catch (err) {
         console.log(err);
       }
};

async function deleteTask(id) {
    const response = await axios.delete(`http://localhost:3006/tasks/${id}`);
    return response 
}

async function editTask(idNum, taskStr) {
    try {
        const response = await axios.put(`http://localhost:3006/tasks/${idNum}`,{id: idNum, task: taskStr} );
        console.log(response.data);
        return response.data
       } catch (err) {
         console.log(err);
       }
    
}

export {addTask, deleteTask, getTasks, editTask};