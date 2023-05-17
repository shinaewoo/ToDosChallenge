import React from "react";
import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDosContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  height: calc(100vh - 244px);
  overflow-y: scroll;
`;

export default function ToDos() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <>
      <CreateToDo />
      <ToDosContainer>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ToDosContainer>
    </>
  );
}
