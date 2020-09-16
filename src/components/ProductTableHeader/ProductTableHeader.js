import React from "react";
import "./ProductTableHeader.css";

export const ProductTableHeader = ({ headerTitles }) => {
  return (
    <div className="ProductTableHeader">
      {headerTitles.map((title) => {
        return (
          <div key={title} className="ProductTableHeader__subHeader">
            {title}
          </div>
        );
      })}
    </div>
  );
};
