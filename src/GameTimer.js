import React, {useEffect} from 'react';

const GameTimer = ({ gameTimer, setGameTimer, endGame, startTimer })=> {
    
     useEffect(() => {
        if (startTimer){

            let timer;
            if(gameTimer<20){
                timer = setTimeout(()=>setGameTimer(gameTimer + 1), 1000);
                }
            else{
                clearTimeout(timer)
                endGame()}
        }
        

     },[gameTimer])
    
    



    return(
   
        
   
        <div>
            
            Timer:{gameTimer}
            </div>
        
            
    )
}
export default GameTimer;
