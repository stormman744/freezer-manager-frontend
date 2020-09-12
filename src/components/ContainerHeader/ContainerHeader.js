import React from "react";
import "./ContainerHeader.css";

export const ContainerHeader = ({ containerName, containerDescription }) => {
  return (
    <div className="ContainerHeader">
      <div className="ContainerHeader__title">{containerName}</div>
      <div className="ContainerHeader__description">{containerDescription}</div>
    </div>
  );
};
