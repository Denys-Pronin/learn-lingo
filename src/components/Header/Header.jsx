import { Link } from "react-router-dom";
import s from "./Header.module.css";
import MainButton from "../MainButton/MainButton.jsx";
import { logoutUser } from "../../firebase.js";

const Header = ({ showLoginForm, showRefisterForm, user, setUser }) => {
  const logout = () => {
    logoutUser;
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="container">
      <Link to="/" className={s.logo}>
        <svg className={s.logo} width="28" height="28">
          <use href={`/icons/icons.svg#icon-logo`} />
        </svg>
        <p className={s.logo_text}>LearnLingo</p>
      </Link>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.nav_link}>
            <Link to="/">Home</Link>
          </li>
          <li className={s.nav_link}>
            <Link to="/teachers">Teachers</Link>
          </li>
        </ul>
      </nav>
      {user ? (
        <div className={s.logout}>
          <div className={s.login_wrapper}>
            <button onClick={logout} className={s.login_text}>
              Log out
            </button>
          </div>
        </div>
      ) : (
        <div className={s.login}>
          <div className={s.login_wrapper}>
            <svg className={s.login_icon} width="20" height="20">
              <use href={`/icons/icons.svg#icon-login`} />
            </svg>
            <button onClick={showLoginForm} className={s.login_text}>
              Log in
            </button>
          </div>
          <MainButton
            text="Registration"
            classNames="header"
            click={showRefisterForm}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
