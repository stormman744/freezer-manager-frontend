import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export const Modal = ({ children, isOpen }) => {
  const modalRoot = document.getElementById("modal-root");
  if (isOpen) {
    return createPortal(
      <div className="Modal__background">
        <div className="Modal">{children}</div>
      </div>,
      modalRoot
    );
  } else {
    return null;
  }
};
