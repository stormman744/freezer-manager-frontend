import React from "react";
import "./InputField.css";

export const InputField = ({ placeholder, type = "text", value, setValue }) => {
  return (
    <input
      className="InputField"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={setValue}
    ></input>
  );
};
