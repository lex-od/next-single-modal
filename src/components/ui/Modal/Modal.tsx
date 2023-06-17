import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.scss";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  isCloseOnOutsideClick?: boolean;
  isCloseOnEsc?: boolean;
  children: ReactNode;
}

export const Modal: FC<IModal> = ({
  isOpen,
  onClose,
  isCloseOnOutsideClick = true,
  isCloseOnEsc = true,
  children,
}) => {
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  // До первого рендера modalRoot недоступен
  useEffect(() => {
    setModalRoot(document.querySelector("#modal-root"));
  }, []);

  // Закрытие по Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };
    if (isOpen && isCloseOnEsc) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, isCloseOnEsc]);

  // Закрытие по клику
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && isCloseOnOutsideClick) {
      onClose();
    }
  };

  return isOpen && modalRoot
    ? createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
          <div className={css.content}>{children}</div>
        </div>,
        modalRoot
      )
    : null;
};
