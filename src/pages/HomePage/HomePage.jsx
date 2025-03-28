import Header from "../../components/Header/Header.jsx";
import MainButton from "../../components/MainButton/MainButton.jsx";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className="container">
      <div className={s.promo}>
        <div className={s.wrapper}>
          <h1 className={s.title}>
            Unlock your potential with the best{" "}
            <span className={s.title_bg}>language</span> tutors
          </h1>
          <p className={s.descr}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <MainButton text="Get started" classNames="mt_64" />
        </div>
        <div className={s.img_wrapper}>
          <img className={s.img} src="/images/avatar.png" alt="Avatar" />
          <div className={s.notebook}>
            <svg className={s.apple_icon} width="46" height="55">
              <use href={`/icons/icons.svg#icon-apple`} />
            </svg>
          </div>
        </div>
      </div>
      <div className={s.stats}>
        <ul className={s.stats_list}>
          <li className={s.stat}>
            <p className={s.stat_title}>32,000 +</p>
            <p className={s.stat_descr}>Experienced tutors</p>
          </li>
          <li className={s.stat}>
            <p className={s.stat_title}>300,000 +</p>
            <p className={s.stat_descr}>5-star tutor reviews</p>
          </li>
          <li className={s.stat}>
            <p className={s.stat_title}>120 +</p>
            <p className={s.stat_descr}>Subjects taught</p>
          </li>
          <li className={s.stat}>
            <p className={s.stat_title}>200 +</p>
            <p className={s.stat_descr}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
