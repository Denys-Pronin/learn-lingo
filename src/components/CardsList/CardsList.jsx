import Card from "../Card/Card.jsx";
import s from "./CardsList.module.css";

const CardsList = () => {
  return (
    <ul className={s.list}>
      <li>
        <Card />
      </li>
    </ul>
  );
};

export default CardsList;
