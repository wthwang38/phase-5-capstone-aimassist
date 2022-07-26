import {useEffect} from 'react';

const GameTimer = ({gameTimer, setGameTimer})=> {


     useEffect(() => {
        if(gameTimer<20){
            setTimeout(()=>setGameTimer(gameTimer + 1), 1000);
        }

     },[gameTimer])
    
    



    return(
        <div>
            Timer:{gameTimer}
            
        </div>
    )
}
export default GameTimer;
