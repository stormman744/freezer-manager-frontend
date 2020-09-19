import React from "react";
import "./TesterComponent.css";

export const TesterComponent = () => {
  return (
    <div>
      <Modal>
        <ModalUpdateContainer></ModalUpdateContainer>
      </Modal>
    </div>
  );
};

export const ModalUpdateContainer = () => {
  return (
    <div>
      <LabelWithInput></LabelWithInput>
      <LabelWithInput></LabelWithInput>
      <ModalActions>
        <Button></Button>
      </ModalActions>
    </div>
  );
};
