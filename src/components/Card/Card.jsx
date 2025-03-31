import s from "./Card.module.css";
import { useState } from "react";
import MainButton from "../MainButton/MainButton.jsx";
import clsx from "clsx";
import TrialForm from "../TrialForm/TrialForm.jsx";
const Card = ({ teacher, favorites, toggleFavorite }) => {
  const [isMore, setIsMore] = useState(false);
  const isFavorite = favorites.includes(teacher.id);
  const [isTrialVisible, setIsTrialVisible] = useState(false);

  const showTrialForm = () => {
    setIsTrialVisible(true);
  };
  const closeTrialForm = () => {
    setIsTrialVisible(false);
  };

  const handleClick = () => {
    toggleFavorite(teacher.id);
  };

  return (
    <>
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
              <svg
                onClick={handleClick}
                className={clsx(s.heart, isFavorite ? s.heart_active : "")}
                width="26"
                height="26"
              >
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
          {isMore ? (
            <>
              <div className={s.descr}>
                Jane is an experienced and dedicated language teacher
                specializing in German and French. She holds a Bachelor's degree
                in German Studies and a Master's degree in French Literature.
                Her passion for languages and teaching has driven her to become
                a highly proficient and knowledgeable instructor. With over 10
                years of teaching experience, Jane has helped numerous students
                of various backgrounds and proficiency levels achieve their
                language learning goals. She is skilled at adapting her teaching
                methods to suit the needs and learning styles of her students,
                ensuring that they feel supported and motivated throughout their
                language journey.
              </div>

              <ul className={s.reviews}>
                {teacher.reviews.map((review, i) => {
                  return (
                    <li className={s.review} key={i}>
                      <div className={s.review_wrapper}>
                        <p className={s.review_name}>{review.reviewer_name}</p>

                        <p className={s.review_rating}>
                          <svg className={s.star} width="16" height="16">
                            <use href={`/icons/icons.svg#icon-star`} />
                          </svg>
                          {review.reviewer_rating}
                        </p>
                      </div>
                      <p className={s.review_comment}>{review.comment}</p>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <button
              onClick={() => setIsMore(true)}
              type="button"
              className={s.more}
            >
              Read more
            </button>
          )}
          <ul className={s.levels}>
            {teacher.levels.map((level) => {
              return <li className={s.level}>{level}</li>;
            })}
          </ul>
          {isMore && (
            <MainButton
              text="Book trial lesson"
              classNames="mt_32"
              click={showTrialForm}
            />
          )}
        </div>
      </div>
      <TrialForm
        teacher={teacher}
        closeTrialForm={closeTrialForm}
        isTrialVisible={isTrialVisible}
      />
    </>
  );
};

export default Card;
