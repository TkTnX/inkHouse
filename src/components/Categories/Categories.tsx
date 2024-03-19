import React, { useState } from "react";
import s from "./Categories.module.scss";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/category.slice";

const categoryList = ["Франция", "Германия", "Англия"];

export const Categories: React.FC = () => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const dispatch = useDispatch();

  const onClickSetCategory = (category: string, index: number) => {
    setCategoryId(index);
    dispatch(setCategory(category));
  };

  return (
    <ul className={s.reproductions__categories}>
      {categoryList.map((category, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              onClickSetCategory(category, index);
            }}
            className={
              categoryId === index
                ? `${s.reproductions__category} active-category`
                : s.reproductions__category
            }
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};
