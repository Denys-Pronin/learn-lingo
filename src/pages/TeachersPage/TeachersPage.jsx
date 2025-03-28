import { useState } from "react";
import CardsList from "../../components/CardsList/CardsList.jsx";
import Filter from "../../components/Filter/Filter.jsx";
// import s from "./TeachersPage.module.css";

const TeachersPage = () => {
  const [filters, setFilters] = useState({
    language: "All",
    level: "All",
    price: "All",
  });

  return (
    <section className="container">
      <Filter filters={filters} onFilterChange={setFilters} />
      <CardsList filters={filters} />
    </section>
  );
};

export default TeachersPage;
