import {USER_FETCH,USER_FETCH_SUCCESS,USER_FETCH_FAILURE} from './userTypes'
import axios from 'axios'
export const fetch_user=()=>{
    return{
        type:USER_FETCH
    }
}

const fetch_user_success=(user)=>{
    return {
        type:USER_FETCH_SUCCESS,
        payload:user
    }
}

const fetch_user_failure=(error)=>{
    return {
        type:USER_FETCH_FAILURE,
        payload:error
    }
}

export const getUsers=()=>{
    return (dispatch)=>{
        dispatch(fetch_user);
        axios.get('https://reqres.in/api/users').then(response=>{
            const users=response.data.data
            dispatch(fetch_user_success(users));
        }).catch(error=>{
            const errorMsg=error.message
            dispatch(fetch_user_failure(errorMsg));
        })
    }
}