import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:3006/',
})

async function addTask(task) {
    const response = await axios.post(`http://localhost:3006/tasks`, task);
    return response
};

async function getTasks() {
    const response = await axios.get('http://localhost:3006/tasks');
    return response.data
};

async function deleteTask(id) {
    const response = await axios.delete(`http://localhost:3006/tasks/${id}`);
    return response 
}

export {addTask, deleteTask, getTasks};