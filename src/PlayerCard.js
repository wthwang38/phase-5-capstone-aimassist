import React from "react";
import Stack from 'react-bootstrap/Stack'

const PlayerCard = ({username, picture}) =>{
    
    return(
        <Stack gap={3}>
            <div>{username}<img src={picture} alt="profile"/></div>
         </Stack>
    )
}

export default PlayerCard;