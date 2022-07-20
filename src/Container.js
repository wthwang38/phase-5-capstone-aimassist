import React from 'react'
import useMightyMouse from 'react-hook-mighty-mouse'
const Container = () => {

    const { position: { client }, } = useMightyMouse();
    const clickPosition = () => {
        console.log("x:", client.x)
        console.log("y:", client.y) 
    }


    return (
        <div id="playbox" onClick={() => clickPosition()}>


        </div>
    );

};


export default Container;