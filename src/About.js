import React from "react";

const About = ()=> {


    return (
        <div>
            <h1 className="text-center">
               <b> About Aim Assist</b>
            </h1>
            <ul>
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
            {/* <img href="https://files.slack.com/files-pri/T02MD9XTF-F03SCNKS5D0/chat_for_fun.png"
            /> */}
            {/* <link href="vast-ocean-03320.herokuapp.com" rel="noreferrer">Chat about it!</link> */}
        </div>

    )
}
export default About;