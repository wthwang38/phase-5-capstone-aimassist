import React, {useState} from 'react'


const Container = () => {
   const [xNum, setXNum] = useState(100)
   const [yNum, setYNum] = useState(200)
   //const [targetClicked, setTargetClicked] = useState(false)
    const [newColor, setNewColor] = useState('#FF0000')

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
        //console.log(targetClicked)
    }
    function wasClicked(){
        
        console.log("miss clicked")
    }
    function handleClickInCircle() {
        createRandomCircles()
    }    

   
    const circle = <div className="circle" style={Object.assign({}, x, y, color)} onClick={()=> handleClickInCircle()}></div>

    return (
        // <div id="playbox" onClick={() => clickPosition()}>
         <div id='playbox' onClick={()=> wasClicked()}> 
            <div>{circle}</div>
        </div>
    );

};


export default Container;