import React from "react";
import "./Dropdown.css";

export const Dropdown = ({ label = "Label", options, selected, setValue }) => {
  if (options.length > 0) {
    return (
      <div className="Dropdown">
        <div className="Dropdown__label">{label}</div>
        <select
          className="Dropdown__select"
          onChange={setValue}
          value={options?.find((x) => x?.id === selected)?.name}
        >
          {options.map((option) => {
            return <option key={option.id}>{option.name}</option>;
          })}
        </select>
      </div>
    );
  } else {
    return null;
  }
};
