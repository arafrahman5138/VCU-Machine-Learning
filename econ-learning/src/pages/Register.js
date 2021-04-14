import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CredentialsContext } from "../App";
import { handleErrors } from "./Login";
import './Register.css';

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountid] = useState(getRandomString(8));
  const [tokens] = useState(0);
  const [module1] = useState(0);
  const [module2] = useState(0);
  const [module3] = useState(0);
  const [module4] = useState(0);
  const [module5] = useState(0);
  const [module6] = useState(0);
  const [module7] = useState(0);
  const [module8] = useState(0);
  const [module9] = useState(0);
  const [module10] = useState(0);
  const [error, setError] = useState("");
  const [, setCredentials] = useContext(CredentialsContext);

  const register = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        accountid,
        tokens,
        module1,
        module2,
        module3,
        module4,
        module5,
        module6,
        module7,
        module8,
        module9,
        module10,
      }),
    })
      .then(handleErrors)
      .then(() => {
        setCredentials({
          username,
          password,
          accountid,
          tokens,
          module1,
          module2,
          module3,
          module4,
          module5,
          module6,
          module7,
          module8,
          module9,
          module10,
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
      <div class="spanR">
      {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
      <form onSubmit={register}>
        <h1 class="h1">Register</h1>
        <input class="usernameInp"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input class="usernameInp"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button class="registerBtn" type="submit">Register</button>
      </form>
    </div>
  );
}
