import s from "./Filter.module.css";
import Dropdown from "../Dropdown/Dropdown.jsx";

const Filter = ({ filters, onFilterChange }) => {
  const languages = [
    "All",
    "French",
    "English",
    "German",
    "Ukrainian",
    "Polish",
  ];
  const levels = [
    "All",
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
    "C1 Advanced",
    "C2 Proficient",
  ];
  const prices = ["All", "10", "20", "30", "40"];

  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };
  return (
    <div className={s.wrapper}>
      <Dropdown
        label="Languages"
        options={languages}
        selected={filters.language}
        onSelect={(value) => handleChange("language", value)}
      />
      <Dropdown
        label="Level of knowledge"
        options={levels}
        selected={filters.level}
        onSelect={(value) => handleChange("level", value)}
      />
      <Dropdown
        label="Price"
        options={prices}
        selected={filters.price}
        onSelect={(value) => handleChange("price", value)}
      />
    </div>
  );
};

export default Filter;
