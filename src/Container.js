import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react'


const Container = () => {
   const [xNum, setXNum] = useState(1)
   const [yNum, setYNum] = useState(1)
   //const [targetClicked, setTargetClicked] = useState(false)
    const [newColor, setNewColor] = useState('#FF0000')
    //logs total clicks
   const [totalCount, setTotalCount] = useState(1)
   const [circleCount, setCircleCount] = useState(1)
   const [timer, setTimer] = useState(0) 

    const colors = ['#ee82ee', '#00FFFF', '#6495ED', '#8A2BE2', '#FFD700', '#191970', '#7fff00', '#8b00b8', '#ff1493', '#48d1cc']

   function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
   }
    function getRandomColor(){
        return colors[Math.floor(Math.random() * colors.length + 1)]
    }
    const color = {
        backgroundColor: `${newColor}`
    }
    const y = {
        marginTop: `${yNum}px`
    }
    const x = {
        marginInline: `${xNum}px`
    }

    function createRandomCircles(){
        let x1 = getRandomNumber(1, 800)
        let y1 = getRandomNumber(1, 500)
        let nc = getRandomColor()
        setNewColor(nc)
        setXNum(x1)
        setYNum(y1)
        //setTargetClicked(!targetClicked)
        
    }

    function clickCounter(state, setter, string){
        let clicks = state
        clicks+=1
        setter(clicks)
        console.log(string, state)
    }
    function handleClickInCircle() {
        createRandomCircles()
        clickCounter(circleCount,setCircleCount,"circle click:")
    }    

   function missedClicks(){
    const missed = totalCount - circleCount
    return missed
   }
    const circle = <div className="circle" style={Object.assign({}, x, y, color)} onClick={()=> handleClickInCircle()}></div>

    return (
        <div>
            <div id="missed">Missed: {missedClicks()}</div>
         <div id='playbox' onClick={()=> clickCounter(totalCount, setTotalCount,"total click:")}> 
            <div>{circle}</div>
        </div>
        </div>
    );

};


export default Container;