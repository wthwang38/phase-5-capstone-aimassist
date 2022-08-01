import React, {useEffect} from 'react';

const GameTimer = ({gameTimer, setGameTimer, endGame})=> {


     useEffect(() => {
        if(gameTimer<20){
            setTimeout(()=>setGameTimer(gameTimer + 1), 1000);
        }
        else{endGame()}

     },[gameTimer])
    
    



    return(
        <div>
            Timer:{gameTimer}
            
        </div>
    )
}
export default GameTimer;
