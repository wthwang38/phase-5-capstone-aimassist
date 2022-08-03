import React from "react";
//import Stack from 'react-bootstrap/Stack'

const PlayerCard = ({username, picture, totalMissed, totalHits, totalClicks, score}) =>{
    const accuracy = (totalHits/totalClicks)*100
    
    return(
        
        <tr>
            <td style={{ paddingRight: "20px" }}id="user-profile-lead"><img className="leaderboard-profile-image" src={picture} alt="profile" />{username} </td>
            <td className="rows" style={{ padding: "0px 20px" }}>{score}</td>
            <td className="rows-missed" style={{ padding: "0px 20px" }}>{totalMissed}</td>
            <td className="rows-hits" style={{ padding: "0px 20px" }}>{totalHits}</td>
            <td className="rows" style={{ paddingLeft: "20px" }}>{accuracy.toFixed(2)}%</td>
           
        </tr>
    )
}

export default PlayerCard;


