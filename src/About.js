import React from "react";

const About = ()=> {


    return (
        <div>
            <h1 className="text-center">
               <b> About Aim Assist</b>
            </h1>
            <ul style={{marginLeft:'20%', marginRight: '20%'}}>
                <li>
                This Application is to help with hand/eye coordination.
                </li> 
                <li>
                The point of the game is to click as many targets(circles) as you can before the timer hits 20. Then, it will log all your data and return totals.
                </li>
                <li>
                Scoring:
                    The more targets you hit, the more you will score.

                    The more you click, you will also get more points, but the targets will jump faster.
                
                </li>
            </ul>
{/* 
            <a href="http://vast-ocean-03320.herokuapp.com/group/18" rel="noreferrer">Chat about it at CHAT FOR FUN</a> */}
        </div>

    )
}
export default About;