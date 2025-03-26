import CardsList from "../../components/CardsList/CardsList.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import s from "./TeachersPage.module.css";

const TeachersPage = () => {
  return (
    <section className="container">
      <Filter />
      <CardsList />
    </section>
  );
};

export default TeachersPage;
