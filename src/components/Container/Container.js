import React, { useState } from "react";
import { ContainerItem } from "../ContainerItem/ContainerItem";
import { ChevronButton } from "../ChevronButton/ChevronButton";

export const Container = ({ container }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="ContainerWrapper__wrapper">
      <ContainerItem
        expanded={expanded}
        key={container.id}
        containerId={container.id}
        containerName={container.name}
        containerDescription={container.description}
      />
      <ChevronButton expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
};
