import { useState } from "react";
import s from "./Filter.module.css";
import Dropdown from "../Dropdown/Dropdown.jsx";

const Filter = () => {
  const languages = ["French", "English", "German", "Ukrainian", "Polish"];
  const levels = [
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
  ];
  const prices = ["10", "20", "30", "40"];

  const [selectedLanguage, setSelectedLanguage] = useState("French");
  const [selectedLevel, setSelectedLevel] = useState("A1 Beginner");
  const [selectedPrice, setSelectedPrice] = useState("30 $");
  return (
    <div className={s.wrapper}>
      <Dropdown
        label="Languages"
        options={languages}
        selected={selectedLanguage}
        onSelect={setSelectedLanguage}
      />
      <Dropdown
        label="Level of knowledge"
        options={levels}
        selected={selectedLevel}
        onSelect={setSelectedLevel}
      />
      <Dropdown
        label="Price"
        options={prices.map((p) => p + " $")}
        selected={selectedPrice}
        onSelect={setSelectedPrice}
      />
    </div>
  );
};

export default Filter;
