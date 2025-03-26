import { useEffect, useRef, useState } from "react";
import s from "./Dropdown.module.css";
import clsx from "clsx";

const Dropdown = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={s.wrapper} ref={dropdownRef}>
      <label className={s.label}>{label}</label>
      <div className={s.select}>
        <button className={s.btn} onClick={() => setIsOpen(!isOpen)}>
          {selected}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#121417"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>

        <div className={clsx(s.options, isOpen ? s.show : "")}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={option === selected ? s.selected : s.option}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
