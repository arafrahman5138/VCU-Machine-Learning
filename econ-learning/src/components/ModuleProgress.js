import React, { useState, useEffect } from "react";
import ProgressBar from "./progressBar";
import '../components/progress.css'


const ModuleProgress = (props) => {
    const [value, setValue] = useState(props.m1);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     setValue(oldValue => {
    //         const newValue = oldValue + 10;

    //         if (newValue === 100) {
    //         clearInterval(interval);
    //         }

    //         return newValue;
    //     });
    //     }, 1000);
    // }, []);

    return (
        <>
        <div id="progress" align="center">
            <h2>PROGRESS:</h2>
            Module 1: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m1} max={100} />
            Module 2: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m2} max={100} />
            Module 3: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m3} max={100} />
            Module 4: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m4} max={100} />
            Module 5: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m5} max={100} />
            Module 6: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m6} max={100} />
            Module 7: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m7} max={100} />
            Module 8: <ProgressBar color={"#ff7979"} width={"150px"} value={props.m8} max={100} />
            {/* </div> */}
        </div>
        </>
    )
}

export default ModuleProgress