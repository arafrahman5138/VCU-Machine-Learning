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
        {/* <div className="wrapper">
        <h1>Progress:</h1>
        <div className="cols">
                    <div className="col" ontouchstart="this.classList.toggle('hover');">
                        <div className="container">
                            <div className="front" style="background-image: url(https://unsplash.it/500/500/)">
                                <div className="inner">
                                    <p>Diligord</p>
                                    <span>Lorem ipsum</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div> */}
        <h2 align="center">PROGRESS:</h2>
        <div className="progress" align="center">
            <button className="modbtn"><Link className="linkbtn" to="/modules/0">Module 1:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m1} max={100} />
            <button className="modbtn"><Link className="linkbtn"to="/modules/1">Module 2:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m2} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/2">Module 3:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m3} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/3">Module 4:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m4} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/4">Module 5:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m5} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/5">Module 6:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m6} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/6">Module 7:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m7} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/7">Module 8:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m8} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/8">Module 9:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m9} max={100} />
            <button className="modbtn"><Link className="linkbtn" to="/modules/9">Module 10:</Link></button> <ProgressBar color={"#ff7979"} width={"150px"} value={props.m10} max={100} />
        </div>
        </>
    )
}

export default ModuleProgress