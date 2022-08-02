import React from "react";

const Logger = ({missedClicks, circleCount, totalCount, hitAcc})=> {

    let hits = circleCount-1
    let total = totalCount-1

    
    return(
        <div>
            <div id="missed">Missed: {missedClicks}</div>
            <div id="hit">Hits: {hits}</div>
            <div id="total">Total: {total}</div>
            <div id="accuracy">Accuracy: {hitAcc}</div>
        </div>
    )
}

export default Logger;


