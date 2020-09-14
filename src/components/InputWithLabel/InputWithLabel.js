import React from "react";
import "./InputWithLabel.css";

export const InputWithLabel = ({
  label = "",
  placeholder = "",
  value,
  setValue,
}) => {
  return (
    <div className="InputWithLabel">
      <label className="InputWithLabel__label">{label}</label>
      <input
        className="InputWithLabel__input"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={setValue}
      ></input>
    </div>
  );
};
