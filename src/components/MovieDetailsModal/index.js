import React, { useEffect } from "react";

// Styled Components
import { StyledMovieModal } from "./Style";

const MovieDetailsModal = ({ isVisible = false, children, onClose,title="" }) => {
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  function keydownHandler({ key }) {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  }

  return !isVisible ? null : (
    <StyledMovieModal>
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </div>
    </StyledMovieModal>
  );
};

export default MovieDetailsModal;
