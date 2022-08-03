import React from "react";
//import Stack from 'react-bootstrap/Stack'

const PlayerCard = ({username, picture, totalMissed, totalHits, totalClicks, score}) =>{
    const accuracy = (totalHits/totalClicks)*100
    return(
        
        <tr>
            <td style={{ paddingRight: "20px" }}><img className="leaderboard-profile-image" src={picture} alt="profile" />{username} </td>
            <td style={{ padding: "0px 20px" }}>{score}</td>
            <td style={{ padding: "0px 20px" }}>{totalMissed}</td>
            <td style={{ padding: "0px 20px" }}>{totalHits}</td>
            <td style={{ paddingLeft: "20px" }}>{accuracy.toFixed(2)}%</td>
           
        </tr>
    )
}

export default PlayerCard;


