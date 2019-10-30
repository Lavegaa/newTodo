import React from "react";
import { createGlobalStyle } from "styled-components";
import TOdoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TOdoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TOdoTemplate>
    </TodoProvider>
  );
}

export default App;
