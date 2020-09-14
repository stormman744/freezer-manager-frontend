import React from "react";
import { FaCogs } from "react-icons/fa";

export const OptionsButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="OptionsButton">
      <FaCogs size="2rem" />
    </div>
  );
};
