import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../redux/user/userActions'
import {Link} from "react-router-dom";
function UserComponent(props) {
    const {fetchUsers,loading,users,error}=props
    useEffect(()=>{
        fetchUsers();
    },[fetchUsers])
    return loading?(
    <h2>Loading...</h2>
    ):error?(
    <h2>{error}</h2>
    ):(
            <div className="row">
                <h2 className="text-center">User List</h2>
                {
                   props.loading?(<h2>Loading....</h2>):props.error?(<h2>{props.error}</h2>):users? users.map(user=>(
                        <div className="card" style={{"width": "23rem"}} key={user.id}>
                        <img className="card-img-top" src={user.avatar} alt="--"/>
                        <div className="card-body">
                            <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                            <p className="card-text">{user.email}</p>
                            <Link to={`/${user.id}`}><button className="btn btn-primary">Details</button></Link>
                        </div>
                        </div>
                    )):''}
            </div>
    )
}

const mapStateToProps=state=>{
    return{
        loading:state.user.loading,
        users:state.user.users,
        error:state.user.error
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchUsers:()=>dispatch(getUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserComponent);
