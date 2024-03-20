import React from "react";
import cardStyles from "./../ReproductionsCard/ReproductionsCard.module.scss";
import s from "./../Cart/Cart.module.scss";
import { removeCartItem } from "../../redux/slices/cart.slice";

import { IoClose } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { CardType } from "../ReproductionsCard/Types";

export const CartItem: React.FC<CardType> = (card) => {
  const dispatch = useDispatch();

  const onClickRemoveItem = () => {
    dispatch(removeCartItem(card.id));
  };

  return (
    <li className={cardStyles.card}>
      <IoClose onClick={onClickRemoveItem} className={s.removeFromCart} />
      <img src={card.img} alt="img" />
      <p className={cardStyles.card__author}>{card.author}</p>
      <h3 className={cardStyles.card__title}>{card.title}</h3>
      <p className={cardStyles.card__info}>{card.info}</p>
      <p className={cardStyles.card__price}>{card.price} руб</p>
    </li>
  );
};
