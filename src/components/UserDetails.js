import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {
    useParams
  } from "react-router-dom";
import {Link} from "react-router-dom";
import {getUser} from '../redux/user/userActions'

function UserDetails(props) {
    let { userId } = useParams();
    useEffect(()=>{
        props.fetchUser();
    },[props.fetchUser,userId])
    return (
        <React.Fragment>
         <Link to="/"><button className="btn btn-primary mt-2">Back</button></Link>
         {props.user && (<div className="row mt-3">
            <div className="card mb-3">
                <img className="card-img-top" src={props.user.avatar} style={{"width":"auto","height":"500px"}} alt="...."/>
                <div className="card-body">
                    <h5 className="card-title">{props.user.first_name} {props.user.last_name}</h5>
                    <p className="card-text">{props.user.email}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
        </div>)}
        
        </React.Fragment>
    )
}
const mapStateTOProps=state=>{
    return{
        user:state.user.user,
        loading:state.user.loading,
        error:state.user.error
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    const userId=ownProps.match.params.userId;
    return{
        fetchUser:()=>dispatch(getUser(userId))
    }
}
export default connect(mapStateTOProps,mapDispatchToProps)(UserDetails)
