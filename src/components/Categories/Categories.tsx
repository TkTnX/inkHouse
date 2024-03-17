import React, { useState } from "react";
import s from "./Categories.module.scss";

const categoryList = ["Франция", "Германия", "Англия"];

export const Categories: React.FC<CategoriesProps> = ({ setCategoryValue }) => {
  const [categoryId, setCategoryId] = useState<number>(0);

  const onClickSetCategory = (category: string, index: number) => {
    setCategoryId(index);
    setCategoryValue(category);
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
