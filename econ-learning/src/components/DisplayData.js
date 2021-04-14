import React, { useState, useContext, useEffect } from "react";
import { CredentialsContext } from "../App";
import { v4 as uuidv4 } from "uuid";

export default function DisplayData() {
  const [tokens, setTokens] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [credentials] = useContext(CredentialsContext);
  const [filter, setFilter] = useState(100);

  const persist = (e) => {
    fetch(`http://localhost:4000/DisplayData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}:${credentials.module1}`,
      },
      body: JSON.stringify(e),
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
      .then((tokens) => setTokens(tokens));
  }, []);

  const getTodos = () => {
    return users.filter(() =>
      filter === "completed" ? todo.checked : !todo.checked
    );
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <select value={filter} onChange={(e) => changeFilter(e.target.value)}>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>

      {getTodos().map((todo) => (
        <div key={todo.id}>
          <input
            checked={todo.checked}
            onChange={() => toggleTodo(todo.id)}
            type="checkbox"
          />
          <label>{todo.text}</label>
        </div>
      ))}
    </div>
  );
}
