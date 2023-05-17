import React from "react";
import { styled } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, selectedCategory } from "../atoms";
import CreateCategory from "./CreateCategory";

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CategorySelectBox = styled.select`
  width: 120px;
`;

export default function Category() {
  const categoryList = useRecoilValue(categoryState);
  const [selected, setSelected] = useRecoilState(selectedCategory);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelected(event.currentTarget.value as any);
  };
  return (
    <CategoryContainer>
      <CategorySelectBox value={selected} onInput={onInput}>
        {categoryList?.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </CategorySelectBox>
      <CreateCategory />
    </CategoryContainer>
  );
}
