import React from "react";
import { IoClose } from "react-icons/io5";
import s from "./Cart.module.scss";
import cardStyles from "./../ReproductionsCard/ReproductionsCard.module.scss";
import img from "./01.jpg";
import { OpenCartType } from "../Header/Types";
export const Cart: React.FC<OpenCartType> = ({ setOpenCart }) => {
  const onClickCloseCart = () =>
    setOpenCart !== undefined && setOpenCart(false);

  return (
    <div className={s.cart}>
      <div className={s.cart__title}>
        <h3 className={s.cart__titleText}>Корзина</h3>
        <IoClose onClick={onClickCloseCart} className={s.cart__closeBtn} />
      </div>

      <ul className={s.cart__list}>
        <li className={cardStyles.card}>
          <IoClose className={s.removeFromCart} />
          <img src={img} alt="img" />
          <p className={cardStyles.card__author}>Франсуа Дюпон</p>
          <h3 className={cardStyles.card__title}>Процедура</h3>
          <p className={cardStyles.card__info}>Цветная литография (40х60) </p>
          <p className={cardStyles.card__price}>20 000 руб</p>
        </li>
        <li className={cardStyles.card}>
          <IoClose className={s.removeFromCart} />
          <img src={img} alt="img" />
          <p className={cardStyles.card__author}>Франсуа Дюпон</p>
          <h3 className={cardStyles.card__title}>Процедура</h3>
          <p className={cardStyles.card__info}>Цветная литография (40х60) </p>
          <p className={cardStyles.card__price}>20 000 руб</p>
        </li>
        <li className={cardStyles.card}>
          <IoClose className={s.removeFromCart} />
          <img src={img} alt="img" />
          <p className={cardStyles.card__author}>Франсуа Дюпон</p>
          <h3 className={cardStyles.card__title}>Процедура</h3>
          <p className={cardStyles.card__info}>Цветная литография (40х60) </p>
          <p className={cardStyles.card__price}>20 000 руб</p>
        </li>
      </ul>
    </div>
  );
};
