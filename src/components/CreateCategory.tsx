import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IForm {
  category: string;
}

export default function CreateCategory() {
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    setCategory((oldCategory) => [...oldCategory, category]);
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("category")} placeholder="Write category" />
      <button>Add</button>
    </form>
  );
}
