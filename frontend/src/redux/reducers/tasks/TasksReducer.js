import { toast } from 'react-toastify';
import { 
    GET_TASK,
    CREATE_TASK,
    UPDATE_TASK,
    DELETE_TASK
} from '../../actions/tasks/TasksActionType';

const initialState = {
    _id: "",
    title: "",
    description: "",
    isChecked: false,
    dueDate: "",
    tasks: []
}

const TasksReducer = (state = initialState, action) => {
    const res = action.payload;
    switch (action.type) {
        case GET_TASK :
            return {
                ...initialState,
                tasks: res.tasks
            };
        case CREATE_TASK :
            toast.success("Task created", { position: toast.POSITION.BOTTOM_CENTER})
            return {
                ...initialState,
                _id: res.task._id,
                title: res.task.title,
                description: res.task.description,
                isChecked: res.task.isChecked,
                dueDate: res.task.dueDate
            };
        case UPDATE_TASK :
            toast.success("Task updated", { position: toast.POSITION.BOTTOM_CENTER})
            return state;
        case DELETE_TASK :
            toast.success("Task deleted", { position: toast.POSITION.BOTTOM_CENTER})
            return state;
        default:
            return state;
    }
}

export default TasksReducer