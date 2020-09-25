import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
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

      <div className="ModalContentUpdateContainer__deleteButtonWrapper">
        <Button onClick={() => respond("DELETE")} type="delete">
          <FaTrashAlt size="1.25rem" />
        </Button>
      </div>

      <ModalActions>
        <Button onClick={() => respond("UPDATE", name, description)}>
          <div>UPDATE</div>
        </Button>
        <Button type="cancel" onClick={() => respond(false)}>
          <div>CANCEL</div>
        </Button>
      </ModalActions>
    </div>
  );
};
