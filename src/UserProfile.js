import React from 'react'

const UserProfile = ({user, cH, cT, cM, cA, cHA})=> {
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
    function currentScore(){
        let hitScore = cH*20
        let totalScore = cT*15
        let missedScore = cM*10
        return (hitScore*totalScore-missedScore)
    }
    
    return(
        <div>
            <div id='parent-profile-div'>
                <div id="user-profile-name"><b>{user.username}</b></div>
                <img src={user.img_profile} alt="profile face" id="user_profile"/>
                <div className="div_stats">Score: {user.score}</div>
                <div className="div_stats">Missed: {user.total_missed}</div>
                <div className="div_stats">Hits: {user.total_hits}</div>
                <div className="div_stats">Total Clicks: {user.total_total}</div>
                <div className='div_stats'>Time Between Clicks: {baAvg().toFixed(2)} seconds</div>
                <div className="div_stats">Hit Accuracy: {accuracy.toFixed(2)}%</div>
                <div id='current-profile-div'><b>Last Game</b>
                    <div className="div_stats">Score: {currentScore()}</div>
                    <div className="div_stats">Missed: {cM}</div>
                    <div className="div_stats">Hits: {cH}</div>
                    <div className="div_stats">Total Clicks: {cT}</div>
                    <div className='div_stats'>Time Between Clicks: {cA} seconds</div>
                    <div className="div_stats">Hit Accuracy: {cHA}%</div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;