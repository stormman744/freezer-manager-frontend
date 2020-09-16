import React, { useState } from "react";
import { Button } from "../Button/Button";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import { ModalActions } from "../ModalActions/ModalActions";
import { ModalTitle } from "../ModalTitle/ModalTitle";
import "./ModalContentCreateContainer.css";

export const ModalContentCreateContainer = ({ respond }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="ModalContentUpdateContainer">
      <ModalTitle title={"Add container"} />
      <InputWithLabel
        placeholder="Name"
        label="Name"
        value={name}
        setValue={(e) => setName(e.target.value)}
      />
      <InputWithLabel
        placeholder="Description"
        label="Description"
        value={description}
        setValue={(e) => setDescription(e.target.value)}
      />
      <ModalActions>
        <Button onClick={() => respond(true, name, description)}>
          <div>ADD</div>
        </Button>
        <Button type="cancel" onClick={() => respond(false)}>
          <div>CANCEL</div>
        </Button>
      </ModalActions>
    </div>
  );
};
