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
    
    const listPlayers = numDescending?.map((player, index)=>{
        return (<PlayerCard key={player.id} index={index} username={player.username} picture={player.img_profile} totalMissed={player.total_missed} totalHits={player.total_hits} totalClicks={player.total_total} score={player.score} uA={player.accuracies} />)
    })
 
    return(
        <div className="leaderboard">
            <h1 id="title-leader-head"><b>The Leaderboard</b></h1>
        <table className="leaderboard">
    <thead>
        <tr style={{ textAlign: "center" }}>
            <th className="header-leader">Rank</th>
            <th id="user-col-leader">Username</th >
            <th className="header-leader">Score</th >
            <th className="header-leader">Total Missed</th >
            <th className="header-leader">Total Hits</th >
            <th className="header-leader">Accuracy</th>
            <th className="header-leader">Hit Speed</th>
        </tr>
    </thead>
     <tbody>{listPlayers}</tbody>
</table> 
        </div>   
    )
}

export default Leaderboard;