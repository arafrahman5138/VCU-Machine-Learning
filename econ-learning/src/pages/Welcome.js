import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './Welcome.css';
import { CredentialsContext } from "../App";
import DragChart from '../components/TestingDragChart'
import ModuleProgress from '../components/ModuleProgress'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader/PageHeader'
import SlideShow from '../components/SlideShow'

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
    <div className="body">
      <PageHeader title="Welcome to the CodeVa Machine Learning Course"></PageHeader><br/><br/><br/><br/>
      <div className ="wrapper">
      {credentials && <h2 className="credentials"><br/><br/>Welcome {credentials.username}</h2>}<br/><br/>
      <div id ="LRbtns">
      <br/>
      {!credentials && <Link class="registerBt" to="/register">Register</Link>}
      {!credentials && <Link class="loginBt" to="/login">Login</Link>}
      </div>
      {credentials && <button class="logoutBtn" onClick={logout}>Logout</button>}
      </div>
    <br/><br/>
    {!credentials && '<br/><br/><br/>' && 
    // <center><img width = "1000px" height = "550px" src="images/codeva.jpeg"/></center>
    <center><SlideShow/></center>
    }
    {credentials && <ModuleProgress m1={50} m2={40} m3={20} m4={80} m5={100} m6={90} m7={10} m8={50} m9={30} m10={40}/> }
    
    {credentials && '<br/><br/><br/>' && <DragChart/>} 
    {credentials && `Tokens:`}
    {!credentials && <Footer/>}
    </div>
    </>
  );
}
