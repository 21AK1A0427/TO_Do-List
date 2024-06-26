import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import MainTask from "./components/MainTask";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  
  function addTodo() {
    if (inputVal !== "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => {
        return index !== todoIndex;
      })
    );
  }

  return (
    <main>
      <div>
        <h1>To Do List</h1>
      </div>
      <Container inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <MainTask todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
