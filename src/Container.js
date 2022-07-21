import React, {useState} from 'react'
//import useMightyMouse from 'react-hook-mighty-mouse'

const Container = () => {
   const [xNum, setXNum] = useState(100)
   const [yNum, setYNum] = useState(200)
    // const { position: { client }, } = useMightyMouse();
    // const clickPosition = () => {
    //     console.log("x:", client.x)
    //     console.log("y:", client.y) 
    // }
    const colors = ['#ee82ee', '#00FFFF', '#6495ED', '#8A2BE2', '#FFD700', '#191970', '#7fff00', '#8b00b8', '#ff1493', '#48d1cc']
   function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
   }
    function getRandomColor(){
        return colors[Math.floor(Math.random() * colors.length + 1)]
    }
    const y = {
        marginTop: `${yNum}px`
    }
    const x = {
        marginInline: `${xNum}px`
    }
    function handleClick(){
        let x1 = getRandomNumber(1, 800)
        let y1 = getRandomNumber(1, 500)
        setXNum(x1)
        setYNum(y1)
    }
    //function createRandomCircles(){}
    const circle = <div className="circle" style={Object.assign({}, x, y)} onClick={()=> handleClick()}></div>

    return (
        // <div id="playbox" onClick={() => clickPosition()}>
         <div id='playbox'> 
            <div>{circle}</div>
        </div>
    );

};


export default Container;