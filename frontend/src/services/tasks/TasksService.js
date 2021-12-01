import axios from 'axios';
import { URL_API_TASK } from '../../core/constants';

const getTasks = async (accessToken) => {
    try {
        return await axios.get( URL_API_TASK, {
            headers: {
                "x-access-token": accessToken
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

const createTask = async (accessToken, task) => {
    /*
        {
            title: task.title, 
            description: task.description, 
            dueDate: task.dueDate
        }
    */
    try {
        return await axios.post( URL_API_TASK + "/create", task,
        {
            headers: {
                "x-access-token": accessToken
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

const updateTask = async (accessToken, task) => {
    /*
        {
            idTask: task.idTask, 
            title: task.title, 
            description: task.description, 
            dueDate: task.dueDate,
            isChecked: task.isChecked
        }
    */
    try {
        return await axios.post( URL_API_TASK + "/update", task,
        {
            headers: {
                "x-access-token": accessToken
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

const deleteTask = async (accessToken, idTask) => {
    try {
        return await axios.post( URL_API_TASK + "/delete", { idTask },
        {
            headers: {
                "x-access-token": accessToken
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

export default { getTasks, updateTask, createTask, deleteTask }