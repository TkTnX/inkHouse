import React from "react";
import s from "./ReproductionsCard.module.scss";
import { CardType } from "./Types";
export const ReproductionsCard: React.FC<CardType> = ({
  img,
  title,
  author,
  price,
  info,
}) => {
  return (
    <li className={s.card}>
      <img src={img} alt={title} />
      <p className={s.card__author}>{author}</p>
      <h3 className={s.card__title}>{title}</h3>
      <p className={s.card__info}>{info}</p>
      <p className={s.card__price}>{price} руб</p>
      <button className="btn-1">В корзину</button>
    </li>
  );
};
