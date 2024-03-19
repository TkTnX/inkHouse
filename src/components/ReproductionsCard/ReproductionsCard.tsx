import React from "react";
import s from "./ReproductionsCard.module.scss";
import { CardType } from "./Types";
import { useDispatch, useSelector } from "react-redux";
import { selectCartList, setCartList } from "../../redux/slices/cart.slice";
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

  const onClickAddToCart = () => {
    const isItemInCart = cartList.some((card) => card.id === id);

    isItemInCart
      ? null
      : dispatch(
          setCartList([...cartList, { img, title, author, price, info, id }])
        );
    console.log(cartList);
  };

  return (
    <li onClick={onClickAddToCart} className={s.card}>
      <img className={s.cart__img} src={img} alt={title} />
      <p className={s.card__author}>{author}</p>
      <h3 className={s.card__title}>{title}</h3>
      <p className={s.card__info}>{info}</p>
      <p className={s.card__price}>{price} руб</p>
      <button className="btn-1">В корзину</button>
    </li>
  );
};
