import axios from 'axios';
import { toast } from 'react-toastify';
import { URL_API_ACCESS } from '../../core/constants';

const SessionsService = {}

SessionsService.loginAccess = async (credentials) => {
    try {
        return await axios.post( URL_API_ACCESS + "/login", credentials);
    } catch (error) {
        console.error(error);
        toast.error(error, { position: toast.POSITION.BOTTOM_CENTER})
    }
}

SessionsService.signupAccess = async (user) => {
    try {
        return await axios.post( URL_API_ACCESS + "/signup", user);
    } catch (error) {
        console.error(error);
        if(error.index){
            toast.error(
                error.keyValue.username ? 
                "invalid username : " + error.keyValue.username 
                : "invalid mail : " + error.keyValue.mail ,
                { position: toast.POSITION.BOTTOM_CENTER})
        }
    }
}

export default SessionsService;