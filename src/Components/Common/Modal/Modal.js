import React from "react";
import "./Modal.scss";

const Modal = ({ children, show, setShow }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={() => setShow(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShow(false)}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
