import React from "react";
import s from "./ReproductionsCard.module.scss";
import { CardType } from "./Types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartList,
  setCartList,
  setTotalPrice,
} from "../../redux/slices/cart.slice";
export const ReproductionsCard: React.FC<CardType> = ({
  img,
  title,
  author,
  price,
  info,
  id,
}) => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);

  const isItemInCart = cartList.some((card) => card.id === id);
  const onClickAddToCart = () => {
    if (isItemInCart) {
      return null;
    } else {
      dispatch(
        setCartList([...cartList, { img, title, author, price, info, id }])
      );
      dispatch(setTotalPrice(price));
    }
  };

  return (
    <li className={s.card}>
      <img className={s.cart__img} src={img} alt={title} />
      <p className={s.card__author}>{author}</p>
      <h3 className={s.card__title}>{title}</h3>
      <p className={s.card__info}>{info}</p>
      <p className={s.card__price}>{price} руб</p>
      <button onClick={onClickAddToCart} className="btn-1">
        {isItemInCart ? "Товар добавлен!" : "В корзину"}
      </button>
    </li>
  );
};
