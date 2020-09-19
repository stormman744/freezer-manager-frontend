import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/Button";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import { ModalActions } from "../ModalActions/ModalActions";
import { ModalContainer } from "../ModalTitle/ModalTitle";
import "./ModalUpdateContainer.css";
export const ModalUpdateContainer = ({
  isOpen,
  respond,
  containerName,
  containerDescription,
}) => {
  const [name, setName] = useState(containerName);
  const [description, setDescription] = useState(containerDescription);
  const modalRoot = document.getElementById("modal-root");
  if (isOpen) {
    return createPortal(
      <div className="ModalUpdateContainer">
        <div className="ModalUpdateContainer__DeleteContainer"></div>
        <div className="ModalUpdateContainer__content">
          <ModalContainer title="Edit container">
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
          </ModalContainer>
        </div>
      </div>,
      modalRoot
    );
  } else {
    return null;
  }
};
