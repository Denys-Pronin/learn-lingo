import { Link } from "react-router-dom";
import s from "./Card.module.css";
import clsx from "clsx";
const Card = () => {
  return (
    <div className={s.card}>
      <img className={s.img} src="/images/cardImg.png" alt="avatar" />
      <div className={s.wrapper}>
        <div className={s.header}>
          <p className={s.lang}>Languages</p>
          <ul className={s.stats}>
            <li className={s.stat}>
              <svg className={s.book} width="16" height="16">
                <use href={`/icons/icons.svg#icon-book`} />
              </svg>
              <p className={s.text}>Lessons online</p>
            </li>
            <li className={s.stat}>
              <p className={s.text}>Lessons done: 1098</p>
            </li>
            <li className={s.stat}>
              <svg className={s.star} width="16" height="16">
                <use href={`/icons/icons.svg#icon-star`} />
              </svg>
              <p className={s.text}>Rating: 4.8</p>
            </li>
            <li className={s.stat}>
              <p className={s.text}>
                Price / 1 hour: <span>30$</span>
              </p>
            </li>
          </ul>
          <button className={s.like}>
            <svg className={s.heart} width="26" height="26">
              <use href={`/icons/icons.svg#icon-heart`} />
            </svg>
          </button>
        </div>
        <p className={s.name}>Jane Smith</p>
        <p className={s.speaks}>
          Speaks: <span>German, French</span>
        </p>
        <p className={s.lesson}>
          <span>Lesson Info:</span> Lessons are structured to cover grammar,
          vocabulary, and practical usage of the language.
        </p>
        <p className={s.conditions}>
          <span>Conditions:</span> Welcomes both adult learners and teenagers
          (13 years and above).Provides personalized study plans
        </p>
        <Link className={s.more}>Read more</Link>
        <ul className={s.levels}>
          <li className={clsx(s.level, s.level_beginner)}>#A1 Beginner</li>
          <li className={s.level}>#A2 Elementary</li>
          <li className={s.level}>#B1 Intermediate</li>
          <li className={s.level}>#B2 Upper-Intermediate</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
