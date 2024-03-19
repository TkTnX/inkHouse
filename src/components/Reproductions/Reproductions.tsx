import React, { useEffect, useState } from "react";
import s from "./Reproductions.module.scss";
import { Categories } from "../Categories/Categories";
import { ReproductionsCard } from "../ReproductionsCard/ReproductionsCard";
import axios from "axios";
import { CardType } from "../ReproductionsCard/Types";
import Skeleton from "../skeleton/Skeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Reproductions: React.FC = () => {
  const [reprData, setReprData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const categoryValue = useSelector(
    (state: RootState) => state.category.categoryName
  );
  useEffect(() => {
    setIsLoading(true);

    try {
      axios
        .get(
          `https://d4eab740102217d9.mokky.dev/reproductions?country=${categoryValue}`
        )
        .then((res) => setReprData(res.data))

        .finally(() => setIsLoading(false));
    } catch (error) {
      setIsError(true);
    }
  }, [categoryValue]);

  return (
    <section className={s.reproductions}>
      <div className="container">
        <div className={s.reproductions__top}>
          <h2 className={s.reproductions__title}>Репродукции</h2>
          <Categories />
        </div>
        {isError && <h2>ошибка!</h2>}
        {reprData.length === 0 ? (
          <h2 className={s.error}>Ошибка при получении данных!</h2>
        ) : (
          <ul className={s.reproductions__list}>
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : reprData.map((card: CardType) => {
                  return <ReproductionsCard key={card.id} {...card} />;
                })}
          </ul>
        )}
      </div>
    </section>
  );
};
