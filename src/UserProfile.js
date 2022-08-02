import React from 'react'
import Navbar from './Navbar'
const UserProfile = ({user})=> {
    console.log(user)
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