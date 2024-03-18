import React from "react";
import s from "./Team.module.scss";

import teamImg from "./teamImg.png";
import team01 from "./01.png";
import team02 from "./02.png";
import team03 from "./03.png";

const teamList = [
  {
    img: team01,
  },
  {
    img: team02,
  },
  {
    img: team03,
  },
];

export const Team: React.FC = () => {
  return (
    <section className={s.team}>
      <div className="container">
        <div className={s.team__wrapper}>
          <div className={s.team__img}>
            <img src={teamImg} alt="Картина" />
          </div>
          <div className={s.team__text}>
            <h2 className={s.team__title}>Наша команда</h2>
            <p className={s.team__desc}>
              Значимость этих проблем настолько очевидна, что базовый вектор
              развития позволяет оценить значение экспериментов, поражающих
              по своей масштабности и грандиозности. Мы вынуждены отталкиваться
              от того, что консультация с широким активом.
            </p>
            <ul className={s.team__list}>
              {teamList.map((item, index) => {
                return (
                  <li key={index} className="team__item">
                    <img
                      src={item.img}
                      className={s.team__itemImg}
                      alt="team"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
