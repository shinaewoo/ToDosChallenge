import React from "react";
import { IToDo, categoryState, selectedCategory, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";

const ToDoWrap = styled.li`
  width: 100%;
  display: flex;
  padding: 4px 0;
  border-bottom: 1px solid #ff9501;
`;

const Buttons = styled.div`
  margin-left: 20px;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #ff9501;
  margin-right: 10px;
`;

export default function ToDo({ text, category, id }: IToDo) {
  const currentCategory = useRecoilValue(selectedCategory);
  const categoryList = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <ToDoWrap>
      <TextWrap>
        <Dot />
        {text}
      </TextWrap>
      <Buttons>
        {categoryList.map(
          (category) =>
            category !== currentCategory && (
              <button name={category} onClick={onClick}>
                {category}
              </button>
            )
        )}
      </Buttons>
    </ToDoWrap>
  );
}
