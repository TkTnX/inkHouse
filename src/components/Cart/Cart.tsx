import React, { useState } from "react";
import s from "./Cart.module.scss";
import { IoClose } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartList,
  setOpenCart,
  clearCart,
} from "../../redux/slices/cart.slice";
import { CartItem } from "../CartItem/CartItem";
import { RootState } from "../../redux/store";
export const Cart: React.FC = () => {
  const cartList = useSelector(selectCartList);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const onClickCloseCart = () =>
    setOpenCart !== undefined && dispatch(setOpenCart(false));

  const onClickClearCart = () => {
    if (window.confirm("Вы уверены, что хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  return (
    <div className={s.cart}>
      <div className={s.cart__title}>
        <h3 className={s.cart__titleText}>Корзина</h3>

        <IoClose onClick={onClickCloseCart} className={s.cart__closeBtn} />
      </div>

      {cartList.length === 0 ? (
        <h2 className={s.EmptyCart}>
          Корзина пустая. Добавьте в корзину 1 картину
        </h2>
      ) : (
        <>
          <ul className={s.cart__list}>
            <FaRegTrashCan className={s.cartClear} onClick={onClickClearCart} />
            {cartList.map((card) => {
              return <CartItem key={card.id} {...card} />;
            })}
          </ul>

          <div className={s.cart__bottom}>
            <div className={s.cart__totalPrice}>
              Итоговая цена: <span>{totalPrice}₽</span>
            </div>

            <button className={`${s.cart__buyBtn} btn-1`}>
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};
