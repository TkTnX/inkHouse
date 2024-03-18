import React, { useState } from "react";
import s from "./Header.module.scss";

import logo from "./../../img/icons/logo.svg";
import cart from "./../../img/icons/cart.svg";
import { OpenCartType } from "./Types";

export const Header: React.FC<OpenCartType> = ({ setOpenCart, openCart }) => {
  const [openPopup, setOpenPopup] = useState(false);

  const onClickOpenPopup = () => setOpenPopup(!openPopup);

  const onClickOpenCart = () => setOpenCart !== undefined && setOpenCart(!openCart);
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__wrapper}>
          <div className="logo">
            <img src={logo} alt="Ink. House" />
            <h3 className="logo__title">Ink. House</h3>
          </div>
          <nav className={s.header__nav}>
            <ul className={s.header__list}>
              <li className={s.header__item}>
                <a href="#!" className={s.header__link}>
                  Репродукции
                </a>
              </li>
              <li className={s.header__item}>
                <a href="#!" className={s.header__link}>
                  Новинки
                </a>
              </li>
              <li className={s.header__item}>
                <a href="#!" className={s.header__link}>
                  О нас
                </a>
              </li>
              <li className={s.header__item}>
                <button onClick={onClickOpenCart} className={s.header__link}>
                  <img src={cart} alt="cart" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={s.header__mobileControls}>
        <button
          onClick={onClickOpenPopup}
          className={openPopup ? s.header__popupOpenned : s.header__mobileBtn}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className={s.header__link}>
          <img src={cart} alt="cart" />
        </button>
      </div>

      <nav
        className={
          openPopup ? `${s.header__mobileMenuOppened}` : s.header__mobileMenu
        }
      >
        <ul className={s.header__mobileList}>
          <li className={s.header__mobileItem}>
            <a href="#!" className={s.header__mobileLink}>
              Репродукции
            </a>
          </li>
          <li className={s.header__mobileItem}>
            <a href="#!" className={s.header__mobileLink}>
              Новинки
            </a>
          </li>
          <li className={s.header__mobileItem}>
            <a href="#!" className={s.header__mobileLink}>
              О нас
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
