import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:3006/',
})
async function getTasks() {
    const response = await axios.get('http://localhost:3006/tasks');
    return response.data
};

async function deleteTask(id) {
    const response = await axios.delete(`http://localhost:3006/tasks/${id}`);
    return response 
}

export {deleteTask, getTasks};