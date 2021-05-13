import {USER_FETCH,USER_FETCH_SUCCESS,USER_FETCH_FAILURE,GET_SINGLE_USER,GET_SINGLE_USER_SUCCESS,GET_SINGLE_USER_FAILURE} from './userTypes'
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

export const fetch_single_user=()=>{
    return{
        type:GET_SINGLE_USER
    }
}

const fetch_single_user_success=(user)=>{
    return {
        type:GET_SINGLE_USER_SUCCESS,
        payload:user
    }
}

const fetch_single_user_failure=(error)=>{
    return {
        type:GET_SINGLE_USER_FAILURE,
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

export const getUser=(id)=>{
   // console.log('fetchid',id)
    return (dispatch)=>{
        dispatch(fetch_single_user);
        axios.get('https://reqres.in/api/users/'+id)
        .then(response=>{
            const users=response.data.data
            dispatch(fetch_single_user_success(users));
            //console.log(users);
        }).catch(error=>{
            const errorMsg=error.message
            dispatch(fetch_single_user_failure(errorMsg));
        })
    }
}