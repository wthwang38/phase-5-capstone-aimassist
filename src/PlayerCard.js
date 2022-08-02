import React from "react";

const PlayerCard = ({username, picture}) =>{
    
    return(
        <ul>
            <li>{username} 
                <img src={picture} alt="profile"/>
                <ul id="stats">
                    <li></li>
                </ul>
            </li>
            
        </ul>
    )
}

export default PlayerCard;