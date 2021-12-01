import { combineReducers } from 'redux';

//Reducers
import SessionsReducer from './sessions/SessionsReducer';
import TasksReducer from './tasks/TasksReducer';

export default combineReducers({
    auth: SessionsReducer,
    task: TasksReducer
});