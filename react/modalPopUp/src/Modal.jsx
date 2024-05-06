import React, { useEffect } from "react";
import "./Modal.css";

export const Modal = ({ active, setClosed, disableGlobalScroll, children }) => {
  // Effect to handle global scrolling
  useEffect(() => {
    if (disableGlobalScroll) {
      document.body.style.overflow = active ? "hidden" : ""; // Disable or enable scrolling on the body
    }
  }, [active, disableGlobalScroll]);

  return (
    <div className={active ? "modal active" : "modal"} onClick={setClosed}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
