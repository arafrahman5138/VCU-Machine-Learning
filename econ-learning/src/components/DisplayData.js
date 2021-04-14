import React, { useState, useEffect, useContext } from "react";
import { CredentialsContext } from "../App";

const DisplayData = (props) => {
    const [todos, setTodos] = useState([]);
    const [credentials] = useContext(CredentialsContext);

    const persist = () => {
    fetch(`http://localhost:4000/DisplayData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}:${credentials.module1}`,
      },
      body: JSON.stringify(),
    }).then(() => {});
  };

  useEffect(() => {
    fetch(`http://localhost:4000/DisplayData`, {
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
    <div>
      {todos.map((todo) => (
          <p>Account ID: {todo.accountid}</p>
      ))}
      <br/><br/>
    </div>
  );
}

export default DisplayData