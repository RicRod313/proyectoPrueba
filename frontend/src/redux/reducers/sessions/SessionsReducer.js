import { toast } from 'react-toastify';
import { 
    LOGIN_ACCESS,
    SIGNUP_ACCESS,
    SIGNOUT_ACCESS
} from '../../actions/sessions/SessionsActionType';

const initialState = {
    _id: "",
    name: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    token: localStorage.getItem("token")
}

const SessionsReducer = (state = initialState, action) => {
    const res = action.payload;
    switch (action.type) {
        case LOGIN_ACCESS :
            toast.success("Success session", { position: toast.POSITION.BOTTOM_CENTER})
            return {
                ...initialState,
                _id: res.user._id,
                name: res.user.name,
                lastName: res.user.lastName,
                userName: res.user.userName,
                password: res.user.password,
                email: res.user.email,
                token: res.token
            };
        case SIGNUP_ACCESS :
            toast.success("Success signup", { position: toast.POSITION.BOTTOM_CENTER})
            return {
                ...initialState,
                _id: res.user._id,
                name: res.user.name,
                lastName: res.user.lastName,
                userName: res.user.userName,
                password: res.user.password,
                email: res.user.email,
                token: res.token
            };
        case SIGNOUT_ACCESS :
            localStorage.removeItem("token")
            toast.success("Success logout", { position: toast.POSITION.BOTTOM_CENTER})
            return{
                _id: "",
                name: "",
                lastName: "",
                userName: "",
                password: "",
                email: "",
                token: null
            }
        default:
            return state;
    }
}

export default SessionsReducer
