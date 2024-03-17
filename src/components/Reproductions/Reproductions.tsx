import React, { useEffect, useState } from "react";
import s from "./Reproductions.module.scss";
import { Categories } from "../Categories/Categories";
import { ReproductionsCard } from "../ReproductionsCard/ReproductionsCard";
import axios from "axios";
import { CardType } from "../ReproductionsCard/Types";
import Skeleton from "../skeleton/Skeleton";

export const Reproductions: React.FC = () => {
  const [reprData, setReprData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categoryValue, setCategoryValue] = useState<string>("Франция");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://d4eab740102217d9.mokky.dev/reproductions?country=${categoryValue}`
      )
      .then((res) => setReprData(res.data))
      .finally(() => setIsLoading(false));
  }, [categoryValue]);

  return (
    <section className={s.reproductions}>
      <div className="container">
        <div className={s.reproductions__top}>
          <h2 className={s.reproductions__title}>Репродукции</h2>
          <Categories setCategoryValue={setCategoryValue} />
        </div>
        <ul className={s.reproductions__list}>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : reprData.map((card: CardType) => {
                return <ReproductionsCard key={card.id} {...card} />;
              })}
        </ul>
      </div>
    </section>
  );
};
