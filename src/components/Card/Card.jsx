import { Link } from "react-router-dom";
import s from "./Card.module.css";
import clsx from "clsx";
const Card = ({ teacher }) => {
  console.log(teacher);

  return (
    <div className={s.card}>
      <img className={s.img} src={teacher.avatar_url} alt="avatar" />
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
              <p className={s.text}>Lessons done: {teacher.lessons_done}</p>
            </li>
            <li className={s.stat}>
              <svg className={s.star} width="16" height="16">
                <use href={`/icons/icons.svg#icon-star`} />
              </svg>
              <p className={s.text}>Rating: {teacher.rating}</p>
            </li>
            <li className={s.stat}>
              <p className={s.text}>
                Price / 1 hour: <span>{teacher.price_per_hour}$</span>
              </p>
            </li>
          </ul>
          <button className={s.like}>
            <svg className={s.heart} width="26" height="26">
              <use href={`/icons/icons.svg#icon-heart`} />
            </svg>
          </button>
        </div>
        <p className={s.name}>{`${teacher.name} ${teacher.surname}`}</p>
        <p className={s.speaks}>
          Speaks: <span>{teacher.languages.join(", ")}</span>
        </p>
        <p className={s.lesson}>
          <span>Lesson Info:</span> {teacher.lesson_info}
        </p>
        <p className={s.conditions}>
          <span>Conditions:</span> {teacher.conditions.join(" ")}
        </p>
        <Link className={s.more}>Read more</Link>
        <ul className={s.levels}>
          {teacher.levels.map((level) => {
            return <li className={s.level}>{level}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
