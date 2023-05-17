import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedCategory, toDoState } from "../atoms";
import { styled } from "styled-components";

const ToDoForm = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const ToDoInput = styled.input`
  width: 91%;
`;

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const nowCategory = useRecoilValue(selectedCategory);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: nowCategory },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  const { register, handleSubmit, setValue } = useForm<IForm>();
  return (
    <ToDoForm onSubmit={handleSubmit(handleValid)}>
      <ToDoInput
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </ToDoForm>
  );
}
