import { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import s from "./CardsList.module.css";
import { getTeachers } from "../../firebase.js";
import MainButton from "../MainButton/MainButton.jsx";

const CardsList = ({ filters }) => {
  const [teachers, setTeachers] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  const loadTeachers = async (isInitial = false) => {
    setLoading(true);
    const newTeachers = await getTeachers(isInitial ? null : lastKey);

    if (newTeachers.length > 0) {
      setTeachers((prev) =>
        isInitial ? newTeachers : [...prev, ...newTeachers]
      );
      setLastKey(newTeachers[newTeachers.length - 1].id);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTeachers(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filtered = teachers.filter(
      (teacher) =>
        (filters.language === "All" ||
          teacher.languages.includes(filters.language)) &&
        (filters.level === "All" || teacher.levels.includes(filters.level)) &&
        (filters.price === "All" ||
          teacher.price_per_hour <= Number(filters.price))
    );

    setFilteredTeachers(filtered);
  }, [teachers, filters]);
  return (
    <>
      <ul className={s.list}>
        {filteredTeachers.map((teacher, i) => {
          return (
            <li key={i}>
              <Card teacher={teacher} />
            </li>
          );
        })}
      </ul>
      <MainButton
        click={() => loadTeachers(false)}
        text={loading ? "Loading..." : "Load more"}
        classNames="m_64auto"
      />
    </>
  );
};

export default CardsList;
