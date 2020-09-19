import React from "react";
import { createPortal } from "react-dom";
import "./ModalCreateContainer.css";

export const ModalCreateContainer = ({ isOpen, respond }) => {
  const modalRoot = document.getElementById("modal-root");
  if (isOpen) {
    return createPortal(<div></div>, modalRoot);
  } else {
    return null;
  }
};
