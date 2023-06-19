import { useState, useEffect, useRef } from "react";

export interface IUseSelectConfig {
  onClose?: () => void;
}

export const useSelect = <
  TriggerElement extends HTMLElement = any,
  DropElement extends HTMLElement = any
>(
  config: IUseSelectConfig = {}
) => {
  const { onClose } = config;

  const [open, setOpen] = useState(false);
  const triggerRef = useRef<TriggerElement>(null);
  const dropRef = useRef<DropElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const isInside = e.composedPath().some((target) => {
        return target === triggerRef.current || target === dropRef.current;
      });
      if (!isInside) {
        setOpen(false);
        onClose?.();
      }
    };

    if (open) {
      window.addEventListener("click", handleClick, true);
    }
    return () => window.removeEventListener("click", handleClick, true);
  }, [open, onClose]);

  const toggleOpen = () => {
    setOpen((state) => !state);
  };

  return {
    open,
    setOpen,
    toggleOpen,
    triggerRef,
    dropRef,
  };
};
