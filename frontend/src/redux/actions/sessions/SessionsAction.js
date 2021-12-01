import { toast } from 'react-toastify';
import SessionsService from '../../../services/sessions/SessionsService';
import { 
    LOGIN_ACCESS,
    SIGNUP_ACCESS,
    SIGNOUT_ACCESS
} from './SessionsActionType';
const SessionsAction = {}

SessionsAction.loginAction = (credentials) => {
    return dispatch => {
        SessionsService.loginAccess(credentials).then(response => {
            const res = response.data;
            if(res.code === 0){
                localStorage.setItem("token", res.token);
                dispatch({
                    type: LOGIN_ACCESS,
                    payload: res
                })
            }else{
                console.log(res)
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

SessionsAction.signupAction = (user) => {
    return dispatch => {
        SessionsService.signupAccess(user).then(response => {
            const res = response.data;
            if(res.code === 0){
                dispatch({
                    type: SIGNUP_ACCESS,
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

SessionsAction.signoutAction = () => {
    return (dispatch) => {
        dispatch({
            type: SIGNOUT_ACCESS
        })
    }
}

export default SessionsAction;