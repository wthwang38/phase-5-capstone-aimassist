import React from "react";
//import Stack from 'react-bootstrap/Stack'

const PlayerCard = ({username, picture, totalMissed, totalHits, totalClicks, score, uA, index}) =>{
    const accuracy = (totalHits/totalClicks)*100
    
    const timebaArr = uA.map((acc) => acc.timeba)

    const baAvg = () => {
        let total = 0
        let count = 0
        timebaArr.forEach((i) => {
            total += i
            count++
        })
        return total / count
    }
    return(
        
        <tr>
            <td style={{fontWeight:"800"}}>{index+1}</td>
            <td style={{ textAlign:"left" }}id="user-profile-lead"><img className="leaderboard-profile-image" src={picture} alt="profile" />{username} </td>
            <td className="rows" style={{ padding: "0px 50px" }}>{score}</td>
            <td className="rows-missed" style={{ padding: "0px 50px" }}>{totalMissed}</td>
            <td className="rows-hits" style={{ padding: "0px 50px" }}>{totalHits}</td>
            <td className="rows" style={{ paddingLeft: "50px" }}>{accuracy.toFixed(2)}%</td>
            <td className="rows" style={{ paddingLeft: "50px" }}>{baAvg().toFixed(2)}sec</td>
        </tr>
    )
}

export default PlayerCard;


