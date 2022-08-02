import React from 'react'
import Navbar from './NavBar'
const UserProfile = ({user})=> {

    return(
        <div>
            <Navbar/>
            <div className="name">{user.username}</div>
            <img src={user.img_profile} alt="profile face"/>
            <div>{}</div>
        </div>
    )
}

export default UserProfile;