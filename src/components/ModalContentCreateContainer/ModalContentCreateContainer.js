import React, { useState } from "react";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
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
      <InputWithLabel label="Name">
        <InputField
          placeholder="Name"
          value={name}
          setValue={(e) => setName(e.target.value)}
        />
      </InputWithLabel>
      <InputWithLabel label="Description">
        <InputField
          placeholder="Description"
          value={description}
          setValue={(e) => setDescription(e.target.value)}
        />
      </InputWithLabel>
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
