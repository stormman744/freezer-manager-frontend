import React from "react";
import "./Button.css";

export const Button = ({ children, onClick, type }) => {
  const buttonStyles = ["Button"];
  if (type) {
    buttonStyles.push("Button__" + type);
  }

  return (
    <button className={buttonStyles.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
