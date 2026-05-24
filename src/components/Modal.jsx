import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="min-h-screen min-w-screen bg-gray-500/50 backdrop-blur-xs"
    >
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
