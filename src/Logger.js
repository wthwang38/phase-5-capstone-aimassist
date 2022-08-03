import React from "react";

const Logger = ({missedClicks, circleCount, totalCount, hitAcc, startClicked})=> {

    let hits = circleCount-1
    let total = totalCount-1

    
    return(
        <div id="logger">
            <span className="stats" id="missed">Missed: {missedClicks}</span>
            <span className="stats" id="hit">Hits: {hits}</span>
            <span className="stats" id="total">Total: {total}</span>
           {!startClicked ? <span id="accuracy">Accuracy: {hitAcc}</span> : null}
        </div>
    )
}

export default Logger;


