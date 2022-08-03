import React, {useEffect, useState} from "react";
import PlayerCard from "./PlayerCard";
//import NavBar from "./NavBar";


const Leaderboard = ({updateP})=> {
    const [players, setPlayers] = useState([])

    
    useEffect(()=>{
        fetch("/leaderboard")
        .then(r => r.json())
        .then(data => setPlayers(data))
    },[updateP]);
    const numDescending = [...players].sort((a, b) => b.score - a.score);
    
    const listPlayers = numDescending?.map((player)=>{
        return (<PlayerCard key={player.id} username={player.username} picture={player.img_profile} totalMissed={player.total_missed} totalHits={player.total_hits} totalClicks={player.total_total} score={player.score} />)
    })
 
    return(
        <div>
            The Leaderboard
        <table>
    <thead>
        <tr style={{ textAlign: "center" }}>
            <th>Username</th>
            <th>Score</th>
            <th>Total Missed</th>
            <th>Total Hits</th>
            <th>Accuracy</th>
        </tr>
    </thead>
     <tbody>{listPlayers.sort()}</tbody>
</table> 
        </div>   
    )
}

export default Leaderboard;