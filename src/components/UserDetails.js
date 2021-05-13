import React from 'react'
import {
    useParams
  } from "react-router-dom";
import {Link} from "react-router-dom";

function UserDetails() {
    let { userId } = useParams();
    return (
        <React.Fragment>
         <Link to="/"><button className="btn btn-primary mt-2">Back</button></Link>
        <div className="row mt-3">
            <div className="card mb-3">
                <img className="card-img-top" src="https://reqres.in/img/faces/1-image.jpg" style={{"width":"auto","height":"500px"}} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
        </div>
        </React.Fragment>
    )
}

export default UserDetails
