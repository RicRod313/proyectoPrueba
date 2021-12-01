import { toast } from 'react-toastify';
import TasksService from '../../../services/tasks/TasksService';
import { 
    GET_TASK,
    CREATE_TASK,
    UPDATE_TASK,
    DELETE_TASK
} from './TasksActionType';

const getTasksAction = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        TasksService.getTasks(token).then(response => {
            const res = response.data;
            if(res.code === 0){
                dispatch({
                    type: GET_TASK,
                    payload: res
                })
            }else{
                console.log(res.message)
                toast.warning(res.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
        }).catch(error => {
            console.error(error.message);
            toast.error(error.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        })
    }
}

const createTaskAction = (task) => {
    return dispatch => {
        const token = localStorage.getItem("token")
        TasksService.createTask(token, task).then(response => {
            const res = response.data;
            if(res.code === 0){
                dispatch({
                    type: CREATE_TASK,
                    payload: res
                })
            }else{
                console.log(res.message)
                toast.warning(res.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
        }).catch(error => {
            console.error(error.message);
            toast.error(error.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        })
    }
}

const updateTaskAction = (task) => {
    return dispatch => {
        const token = localStorage.getItem("token")
        TasksService.updateTask(token, task).then(response => {
            const res = response.data;
            if(res.code === 0){
                dispatch({
                    type: UPDATE_TASK,
                    payload: res
                })
            }else{
                console.log(res.message)
                toast.warning(res.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
        }).catch(error => {
            console.error(error.message);
            toast.error(error.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        })
    }
}

const deleteTaskAction = (task) => {
    return dispatch => {
        const token = localStorage.getItem("token")
        TasksService.deleteTask(token, task).then(response => {
            const res = response.data;
            if(res.code === 0){
                dispatch({
                    type: DELETE_TASK,
                    payload: res
                })
            }else{
                console.log(res.message)
                toast.warning(res.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
        }).catch(error => {
            console.error(error.message);
            toast.error(error.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        })
    }
}

export default { getTasksAction, createTaskAction, updateTaskAction, deleteTaskAction }