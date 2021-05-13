import {USER_FETCH,USER_FETCH_SUCCESS,USER_FETCH_FAILURE} from './userTypes'

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
        default:
            return state;
    }
}

export default userReducer;