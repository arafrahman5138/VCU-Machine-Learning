import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './Welcome.css';
import { CredentialsContext } from "../App";

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
    <div >
      <h1>Welcome {credentials && credentials.username}</h1>
      {!credentials && <Link class="registerBt" to="/register">Register</Link>}
      <br />
      {!credentials && <Link class="loginBt" to="/login">Login</Link>}
      <div class ="wrapper">
      {credentials && <button class="logoutBtn" onClick={logout}>Logout</button>}
      </div>
    </div>
  );
}
