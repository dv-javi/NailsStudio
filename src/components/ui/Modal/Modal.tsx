import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  backdropClassName?: string;
  panelClassName?: string;
  ariaLabelledBy?: string;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  backdropClassName = "modal-backdrop",
  panelClassName = "modal-panel",
  ariaLabelledBy,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={backdropClassName}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={panelClassName}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
      >
        {children}
      </div>
    </>
  );
}
