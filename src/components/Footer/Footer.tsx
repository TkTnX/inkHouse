import React from "react";
import s from "./Footer.module.scss";
import logo from "./../../img/icons/logo.svg";

import faceBookImg from "./01.svg";
import instagramImg from "./02.svg";
import youtubeImg from "./03.svg";

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__wrapper}>
          <ul className={s.footer__list}>
            <li className={s.footer__item}>
              <div className={s.footer__logo}>
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <h3 className="logo__title">Ink. House</h3>
                </div>
              </div>
            </li>
            <li className={s.footer__itemTitle}>+7 (999) 543-54-54</li>
            <li className={s.footer__item}>Мастерская</li>
          </ul>
          <ul className={s.footer__listNav}>
            <ul className={s.footer__list}>
              <li className={s.footer__itemTtitle}>Репродукции</li>
              <li className={s.footer__item}>Франция</li>
              <li className={s.footer__item}>Германия</li>
              <li className={s.footer__item}>Англия</li>
            </ul>
            <ul className={s.footer__list}>
              <li className={s.footer__itemTtitle}>Новинки</li>
              <li className={s.footer__item}>2021</li>
              <li className={s.footer__item}>2020</li>
            </ul>
            <ul className={s.footer__list}>
              <li className={s.footer__itemTtitle}>О нас</li>
              <li className={s.footer__item}>Художники</li>
              <li className={s.footer__item}>Менеджеры</li>
            </ul>
          </ul>
          <ul className={s.footer__copyright}>
            <ul className={s.footer__socials}>
              <li className={s.footer__social}>
                <img src={faceBookImg} alt="facebook" />
              </li>
              <li className={s.footer__social}>
                <img src={instagramImg} alt="instagram" />
              </li>
              <li className={s.footer__social}>
                <img src={youtubeImg} alt="youtube" />
              </li>
            </ul>
            <p className={s.footer__copyrightText}>Ink. House ®</p>
            <p className={s.footer__copyrightText}>All rights reserved</p>
          </ul>
        </div>
      </div>
    </footer>
  );
};
