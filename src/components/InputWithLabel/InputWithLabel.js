import React from "react";
import "./InputWithLabel.css";

export const InputWithLabel = ({ label, children }) => {
  return (
    <div className="InputWithLabel">
      <label className="InputWithLabel__label">{label}</label>
      {children}
    </div>
  );
};
