import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Welcome.css';
import { CredentialsContext } from "../App";

export default function Welcome() {
  const [credentails, setCredentials] = useContext(CredentialsContext);
  const logout = () => {
    setCredentials(null);
  };

  return (
    <div >
      <h1>Welcome {credentails && credentails.username}</h1>
      {!credentails && <Link class="registerBt" to="/register">Register</Link>}
      <br />
      {!credentails && <Link class="loginBt" to="/login">Login</Link>}
      
      <div class ="wrapper">
      {credentails && <button class="logoutBtn" onClick={logout}>Logout</button>}
      </div>
    </div>
  );
}
