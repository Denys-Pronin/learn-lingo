import { Link } from "react-router-dom";
import s from "./Header.module.css";
import MainButton from "../MainButton/MainButton.jsx";

const Header = () => {
  return (
    <header className="container">
      <Link to="/home" className={s.logo}>
        <svg className={s.logo} width="28" height="28">
          <use href={`/icons/icons.svg#icon-logo`} />
        </svg>
        <p className={s.logo_text}>LearnLingo</p>
      </Link>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.nav_link}>
            <Link to="/home">Home</Link>
          </li>
          <li className={s.nav_link}>
            <Link to="/teachers">Teachers</Link>
          </li>
        </ul>
      </nav>
      <div className={s.login}>
        <div className={s.login_wrapper}>
          <svg className={s.login_icon} width="20" height="20">
            <use href={`/icons/icons.svg#icon-login`} />
          </svg>
          <p className={s.login_text}>Log in</p>
        </div>
        <MainButton text="Registration" />
      </div>
    </header>
  );
};

export default Header;
