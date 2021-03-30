import React, { useState, useEffect } from "react";
import ProgressBar from "./progressBar";
import '../components/progress.css'
import { Link } from "react-router-dom";


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
            <Link to="/modules/0">Module 1:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m1} max={100} />
            <Link to="/modules/1">Module 2:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m2} max={100} />
            <Link to="/modules/2">Module 3:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m3} max={100} />
            <Link to="/modules/3">Module 4:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m4} max={100} />
            <Link to="/modules/4">Module 5:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m5} max={100} />
            <Link to="/modules/5">Module 6:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m6} max={100} />
            <Link to="/modules/6">Module 7:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m7} max={100} />
            <Link to="/modules/7">Module 8:</Link> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m8} max={100} />
            {/* </div> */}
        </div>
        </>
    )
}

export default ModuleProgress