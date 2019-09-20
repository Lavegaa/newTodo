import React from "react";
import { createGlobalStyle } from "styled-components";
import TOdoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TOdoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TOdoTemplate>
    </div>
  );
}

export default App;
