import React, {useState} from 'react'
import GameTimer from './GameTimer';
const Container = () => {
    const [xNum, setXNum] = useState(1)
    const [yNum, setYNum] = useState(1)
    const [timeBetween, setTimeBetween] = useState(0)
    //const [endClicked, setEndClicked] = useState(false)
    const [newColor, setNewColor] = useState('#FF0000')
    const [totalCount, setTotalCount] = useState(1) //logs total clicks
    const [circleCount, setCircleCount] = useState(1) //logs circle clicks
    const [gameTimer, setGameTimer] = useState() 
    const colors = ['#ee82ee', '#00FFFF', '#6495ED', '#8A2BE2', '#FFD700', '#191970', '#7fff00', '#8b00b8', '#ff1493', '#48d1cc']
    // let circleTime = useRef(null);
    let circleTime;
    const [avgTime, setAvgTime] = useState([]);

    function startGame(){
        circleTimer()
        setGameTimer(0)
        setAvgTime([])
    }
         const circleTimer = ()=> {
        circleTime = setTimeout(createRandomCircles, 2000)
        return (createRandomCircles() && circleTime)  
    }
    // useEffect(()=> {

    //    return () => clearTimeout(circleTime.current);
    // },[endClicked])

   function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min)
   }
    function getRandomColor(){
        return colors[Math.floor(Math.random() * colors.length + 1)]
    }
    const color = {backgroundColor: `${newColor}`}
    const y = {marginTop: `${yNum}px`}
    const x = {marginInline: `${xNum}px`}

    function createRandomCircles(){
        let x1 = getRandomNumber(1, 800)
        let y1 = getRandomNumber(1, 500)
        let nc = getRandomColor()
        setNewColor(nc)
        setXNum(x1)
        setYNum(y1)
    }

    function clickCounter(state, setter){
        let clicks = state
        clicks+=1
        setter(clicks)
        
    }
    function handleClickInCircle() {
        betweenTime()
        addToAvg()
        clickCounter(circleCount,setCircleCount)
        createRandomCircles()
        circleTimer()

    }    
    
   function missedClicks(){
        const missed = totalCount - circleCount
        return missed
   }
   let avg;
   function endGame(){
    console.log("Missed:", missedClicks())
    console.log("Hits:",circleCount-1)
    console.log("Total:",totalCount-1)
    clearTimeout(circleTime)
    circleTime = null
    // setEndClicked(!endClicked)
    setYNum(1000)
    setXNum(1000)
    setCircleCount(1)
    setTotalCount(1)
    setTimeBetween(1)
    console.log("GAME OVER")
    avg = avgAllTime()
    console.log("AVERAGE SPEED:",avg)
   }
    const circle = <div className="circle" style={Object.assign({}, x, y, color)} onClick={() => {
        handleClickInCircle();
        }
}></div>
   

    function betweenTime(){
        setTimeBetween(gameTimer)
    }

    function addToAvg(){
        const speed = gameTimer - timeBetween;
        setAvgTime(avgTime => [...avgTime, speed])
    }
    function avgAllTime(){
        let total = 0;
        let count = 0;
        avgTime.forEach((item)=>{
            total += item;
            count++;
        });
        return total/count;
    }
    return (
        <div>
            <GameTimer gameTimer={gameTimer} setGameTimer={setGameTimer} endGame={endGame}/>
            <div id="missed">Missed: {missedClicks()}</div>
            <div id="hit">Hits: {circleCount-1}</div>
            <div id="total">Total: {totalCount-1}</div>
            <button id="start_button" onClick={startGame}>START</button>
            {/* <button id="start_button" onClick={endGame}>end</button> */}
         <div id='playbox' onClick={()=> clickCounter(totalCount, setTotalCount)}> 
            <div>{circle}</div>
        </div>
        </div>
    );

};


export default Container;