import React from 'react'
//import Navbar from './NavBar'
const UserProfile = ({user})=> {
    const accuracy = (user.total_hits / user.total_total) * 100

    const timebaArr = user.accuracies.map((acc)=> acc.timeba)

    const baAvg = ()=> {
        let total = 0
        let count = 0
        timebaArr.forEach((i)=>{
            total += i
            count++
        })
        return total/count
    }
    
    return(
        <div>
            <div className="name">{user.username}</div>
            <img src={user.img_profile} alt="profile face"/>
            <div>Score: {user.score}</div>
            <div className="div_stats">Missed: {user.total_missed}</div>
            <div className="div_stats">Hits: {user.total_hits}</div>
            <div className="div_stats">Total Clicks: {user.total_total}</div>
            <div className='div_stats'>Time Between Clicks: {baAvg().toFixed(2)} seconds</div>
            <div className="div_stats">Hit Accuracy: {accuracy.toFixed(2)}%</div>
        </div>
    )
}

export default UserProfile;