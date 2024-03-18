import React from "react";
import s from "./Collection.module.scss";
import starImg from "./star.svg";
export const Collection: React.FC = () => {
  return (
    <section className={s.collection}>
      <div className="container">
        <div className={s.collection__wrapper}>
          <div className={s.collection__title}>
            <img className={s.collection__img} src={starImg} alt="звезда" />
            <h2 className={s.collection__titleText}>
              Новая коллекция французских авторов
            </h2>
          </div>
          <div className={s.collection__desc}>
            <p className={s.collection__descText}>
              Сложно сказать, почему акционеры крупнейших компаний призывают нас
              к новым свершениям, которые, в свою очередь, должны быть
              заблокированы в рамках своих собственных рациональных ограничений.
            </p>
            <p className={s.collection__descText}>
              Принимая во внимание показатели успешности, граница обучения
              кадров предопределяет высокую востребованность направлений
              прогрессивного развития.
            </p>
          </div>
          <div className={s.collection__btn}>
            <a href="#!" className="btn-yellow">
              Ознакомиться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
