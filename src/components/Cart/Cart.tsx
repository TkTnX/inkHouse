import React from "react";
import s from "./Cart.module.scss";
import { IoClose } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { selectCartList, setOpenCart } from "../../redux/slices/cart.slice";
import { CartItem } from "../CartItem/CartItem";
export const Cart: React.FC = () => {
  const cartList = useSelector(selectCartList);

  const dispatch = useDispatch();

  const onClickCloseCart = () =>
    setOpenCart !== undefined && dispatch(setOpenCart(false));

  return (
    <div className={s.cart}>
      <div className={s.cart__title}>
        <h3 className={s.cart__titleText}>Корзина</h3>
        <IoClose onClick={onClickCloseCart} className={s.cart__closeBtn} />
      </div>

      {cartList.length === 0 ? (
        <h2 className={s.EmptyCart}>Корзина пустая. Добавьте в корзину 1 картину</h2>
      ) : (
        <ul className={s.cart__list}>
          {cartList.map((card) => {
            return <CartItem key={card.id} {...card} />;
          })}
        </ul>
      )}
    </div>
  );
};
