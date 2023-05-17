import React from "react";
import { styled } from "styled-components";
import ToDos from "./ToDos";
import Category from "./Category";

const ToDoContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff9501;
`;

const ToDoTitle = styled.span`
  font-size: 48px;
  padding: 30px 0;
  color: #ff9501;
`;
export default function ToDoList() {
  return (
    <ToDoContainer>
      <ToDoTitle>To Dos</ToDoTitle>
      <Category />
      <ToDos />
    </ToDoContainer>
  );
}
