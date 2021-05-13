import React from 'react'
import {
    useParams
  } from "react-router-dom";

function UserDetails() {
    let { userId } = useParams();
    return (
        <div>
            UserDetails {userId}
        </div>
    )
}

export default UserDetails
