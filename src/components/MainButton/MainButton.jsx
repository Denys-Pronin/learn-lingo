import clsx from "clsx";
import s from "./MainButton.module.css";
const MainButton = ({ text, classNames, click }) => {
  return (
    <button onClick={click} className={clsx(s.btn, s[classNames])}>
      {text}
    </button>
  );
};

export default MainButton;
