import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./ChevronButton.css";

export const ChevronButton = ({ expanded, setExpanded }) => {
  return (
    <div className="ChevronButton" onClick={() => setExpanded(!expanded)}>
      <FaChevronDown
        style={{
          transform: expanded ? "rotateX(180deg)" : "rotateX(0deg)",
          transition: "transform 200ms ease-in-out",
        }}
      />
    </div>
  );
};
