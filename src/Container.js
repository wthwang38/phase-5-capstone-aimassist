import React from 'react'
//import useMightyMouse from 'react-hook-mighty-mouse'
const Container = () => {
   
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
        marginTop: `100px`
    }
    const x = {
        marginInline: `500px`
    }
    //function createRandomCircles(){}
    const circle = <div className="circle" style={Object.assign({}, x, y)}></div>

    console.log(getRandomNumber())
    return (
        // <div id="playbox" onClick={() => clickPosition()}>
         <div id='playbox'> 
            <div>{circle}</div>
        </div>
    );

};


export default Container;