import React, { useState } from "react";
import { Button } from "../Button/Button";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import { ModalActions } from "../ModalActions/ModalActions";
import { ModalTitle } from "../ModalTitle/ModalTitle";
import "./ModalContentUpdateContainer.css";

export const ModalContentUpdateContainer = ({
  respond,
  containerName,
  containerDescription,
}) => {
  const [name, setName] = useState(containerName);
  const [description, setDescription] = useState(containerDescription);
  return (
    <div className="ModalContentUpdateContainer">
      <ModalTitle title={"Edit container"} />
      <InputWithLabel
        label="Name"
        value={name}
        setValue={(e) => setName(e.target.value)}
      />
      <InputWithLabel
        label="Description"
        value={description}
        setValue={(e) => setDescription(e.target.value)}
      />
      <ModalActions>
        <Button onClick={() => respond(true, name, description)}>
          <div>UPDATE</div>
        </Button>
        <Button type="cancel" onClick={() => respond(false)}>
          <div>CANCEL</div>
        </Button>
      </ModalActions>
    </div>
  );
};
