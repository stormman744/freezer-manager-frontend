import React, { useState } from "react";
import { ContainerItem } from "../ContainerItem/ContainerItem";
import { ChevronButton } from "../ChevronButton/ChevronButton";
import "./Container.css";
import { useSelector } from "react-redux";

export const Container = ({ container }) => {
  const [expanded, setExpanded] = useState(false);
  const productsLength = useSelector(
    (state) => state?.products?.data[container.id]?.length
  );
  return (
    <div className="Container__wrapper">
      <ContainerItem
        expanded={expanded}
        key={container.id}
        containerId={container.id}
        containerName={container.name}
        containerDescription={container.description}
      />
      {productsLength > 1 && (
        <ChevronButton expanded={expanded} setExpanded={setExpanded} />
      )}
    </div>
  );
};
