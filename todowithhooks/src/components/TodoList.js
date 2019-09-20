import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TOdoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TOdoListBlock>
      <TodoItem text='프로젝트 생성하기' done={true} />
      <TodoItem text='프로젝트 생성하기22' done={true} />
      <TodoItem text='프로젝트 생성하기33' done={false} />
      <TodoItem text='프로젝트 생성하기44' done={false} />
    </TOdoListBlock>
  );
};

export default TodoList;
