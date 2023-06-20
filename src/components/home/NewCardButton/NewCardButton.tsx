"use client";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal/Modal";
import { NewCardForm } from "@/components/home/NewCardForm/NewCardForm";
import css from "./NewCardButton.module.scss";

export const NewCardButton = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal((state) => !state);
  };

  return (
    <>
      <button onClick={toggleModal} className={css.button}>
        Create new Card
      </button>

      <Modal isOpen={isModal} onClose={toggleModal}>
        <NewCardForm onClose={toggleModal} />
      </Modal>
    </>
  );
};
