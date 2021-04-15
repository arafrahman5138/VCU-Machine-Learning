import React, { useState, useEffect, useContext } from "react";
import ProgressBar from "./progressBar";
import { CredentialsContext } from "../App";
import '../components/progress.css'
import { Link } from "react-router-dom";
import DragChart from '../components/TestingDragChart'


const ModuleProgress = (props) => {
    const [todos, setTodos] = useState([]);
    const [credentials] = useContext(CredentialsContext);

    const persist = () => {
    fetch(`http://localhost:4000/ModuleProgress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}:${credentials.module1}`,
      },
      body: JSON.stringify(),
    }).then(() => {});
  };

  useEffect(() => {
    fetch(`http://localhost:4000/ModuleProgress`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}:${credentials.module1}`,
      },
    })
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

    return (
        <>
      
        <h2 align="center">PROGRESS:</h2>
        <div className="progress" align="center"> 
        
            <button className="modbtn"><Link className="linkbtn" to="/modules/0">Module 1:</Link></button>
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module1} max={100} />
             ))}
            </div>

            <button className="modbtn"><Link className="linkbtn"to="/modules/1">Module 2:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module2} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/2">Module 3:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module3} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/3">Module 4:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module4} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/4">Module 5:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module5} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/5">Module 6:</Link></button> <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module6} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/6">Module 7:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module7} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/7">Module 8:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module8} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/8">Module 9:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module9} max={100} />
            ))}
            </div>

            <button className="modbtn"><Link className="linkbtn" to="/modules/9">Module 10:</Link></button> 
            <div>
            {todos.map(todos => (
            <ProgressBar color={"#ff7979"} width={"150px"} value={todos.module10} max={100} />
            ))}
            </div>
        </div>

        <div>
        <br/>
        <br/>
        <br/>
        <DragChart/>
        
            {todos.map(todos => (
            <p>Tokens: {todos.tokens}</p>
            ))}
        
        </div>
        </>
    );
}

export default ModuleProgress