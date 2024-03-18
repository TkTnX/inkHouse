import React from "react";
import s from "./Title.module.scss";

import titleImg from "./titleImg.png";
import { Cart } from "../Cart/Cart";
import { OpenCartType } from "../Header/Types";

export const Title: React.FC<OpenCartType> = ({ openCart, setOpenCart }) => {
  openCart
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  return (
    <section className={s.title}>
      {openCart && <Cart setOpenCart={setOpenCart} />}

      <div className="container">
        <div className={s.title__wrapper}>
          <img
            className={s.title__img}
            src={titleImg}
            alt="Реплики картин от Ink. House"
          />
          <div className={s.title__text}>
            <h1 className={s.title__title}>
              Реплики картин от <span>Ink. House</span>
            </h1>
            <p className="text-1 title__desc">
              Высокое качество отрисовки на плотной бумаге или льняном холсте.
              Редкие произведения, доступные цены.
            </p>
            <div className={s.title__btn}>
              <a href="#!" className="btn-1">
                Продукция
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
