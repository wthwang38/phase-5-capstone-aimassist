import React, {useEffect, useState} from "react";
import PlayerCard from "./PlayerCard";
import Navbar from "./Navbar";

const Leaderboard = ()=> {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch("/leaderboard")
        .then(r => r.json())
        .then(data => setPlayers(data))
    },[]);

    const listPlayers = players?.map((player)=>{
        return (<PlayerCard key={player.id} username={player.username} picture={player.img_profile}/>)
    })
 
    return(
        <div>
            <Navbar/>
            The Leaderboard
            {listPlayers}
        </div>    
    )
}

export default Leaderboard;