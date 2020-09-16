import React from "react";
import "./Dropdown.css";

export const Dropdown = ({ label = "Label", units, setValue }) => {
  if (units) {
    return (
      <div className="Dropdown">
        <div className="Dropdown__label">{label}</div>
        <select className="Dropdown__select" onChange={setValue}>
          {units.map((unit) => {
            return <option key={unit.id}>{unit.name}</option>;
          })}
        </select>
      </div>
    );
  } else {
    return null;
  }
};
