import {USER_FETCH,USER_FETCH_SUCCESS,USER_FETCH_FAILURE,GET_SINGLE_USER,GET_SINGLE_USER_SUCCESS,GET_SINGLE_USER_FAILURE} from './userTypes'

const inititalState={
    loading:false,
    users:[],
    error:''
}

const userReducer=(state=inititalState,action)=>{
    switch(action.type){
        case USER_FETCH:
            return{
                ...state,
                loading:true
            }
        case USER_FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case USER_FETCH_FAILURE:
        return{
            ...state,
            loading:false,
            error:action.payload,
            users:[]
        }
        case GET_SINGLE_USER:
            return{
                ...state,
                loading:true
            }
        case GET_SINGLE_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
                error:''
            }
        case GET_SINGLE_USER_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
                user:[]
            }
        default:
            return state;
    }
}

export default userReducer;