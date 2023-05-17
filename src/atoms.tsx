import { atom, selector } from "recoil";

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const selectedCategory = atom({
  key: "selectedCategory",
  default: "TODO",
  effects: [localStorageEffect("selectedCategory")],
});

export const categoryState = atom({
  key: "category",
  default: ["TODO", "DOING", "DONE"],
  effects: [localStorageEffect("category")],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [localStorageEffect("toDo")],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const selected = get(selectedCategory);
    return toDos.filter((toDo) => toDo.category === selected);
  },
});
