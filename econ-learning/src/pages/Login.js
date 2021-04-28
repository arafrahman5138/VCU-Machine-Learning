import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CredentialsContext } from "../App";
import './Login.css';

export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    throw Error(message);
  }
  return response.json();
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setCredentials] = useContext(CredentialsContext);

  //This const is to call back to the backend to verify if the account exists
  const login = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(handleErrors)
      .then(() => {
      // This allows us to use the players username for the welcome page
        setCredentials({
          username,
          password,
        });
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const history = useHistory();

  return (
    <div class="formm">
      <div class="spanL">
      {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
      <form onSubmit={login}>
      <h1 class="h1">Sign in</h1>
        <input class="usernameInp"
        // Student Input for Username
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input class="usernameInp"
          type="password"
         // Student Input for Password
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Password"
        />
        <br />
        <button class="loginBtn" type="submit">Sign in</button>
      </form>
    </div>
  );
}
