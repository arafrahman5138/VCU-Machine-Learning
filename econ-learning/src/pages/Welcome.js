import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './Welcome.css';
import { CredentialsContext } from "../App";
import DragChart from '../components/TestingDragChart'
import ModuleProgress from '../components/ModuleProgress'
import Footer from '../components/Footer'

export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    throw Error(message);
  }
  return response.json();
};

export default function Welcome() {
  const [credentials, setCredentials] = useContext(CredentialsContext);
  const logout = () => {
    setCredentials(null);
  };

  return (
    <>
    <div >
      <h1>Welcome {credentials && credentials.username}</h1>
      {!credentials && <Link class="registerBt" to="/register">Register</Link>}
      <br />
      {!credentials && <Link class="loginBt" to="/login">Login</Link>}
      <div class ="wrapper">
      {credentials && <button class="logoutBtn" onClick={logout}>Logout</button>}
      
      </div>
    </div>
    <br/><br/><br/><br/>
    {!credentials && '<br/><br/><br/>' && <center><img width = "1000px" height = "550px" src="images/codeva.jpeg"/></center>}
    {credentials && <ModuleProgress m1={50} m2={40} m3={20} m4={80} m5={100} m6={90} m7={10} m8={50} m9={30} m10={40}/> }
    
    {credentials && '<br/><br/><br/>' && <DragChart/>} 
    {credentials && `Tokens:`}
    {!credentials && <Footer/>}
    </>
  );
}
